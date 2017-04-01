package com.reactnativedemo;

import android.widget.Toast;

import com.facebook.react.bridge.ObjectAlreadyConsumedException;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nullable;

/**
 * Created by AlphaDo on 2017/4/1.
 */

public class MyNativeToast extends ReactContextBaseJavaModule {

    public MyNativeToast(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "MyAndroidToast";
    }


    @Override
    public Map<String, Object> getConstants() {
        final Map<String,Object> consts = new HashMap<String,Object>();
        consts.put("k1", Toast.LENGTH_SHORT);
        consts.put("k2",Toast.LENGTH_LONG);
        return consts;
    }

    @ReactMethod
    public void show (String message,int duration){
        Toast.makeText(getReactApplicationContext(),message,duration).show();
    }
}
