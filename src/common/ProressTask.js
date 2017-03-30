function  progressTask () {
    this.progress = 0;
    this.finishNumber = 100;
    //unstarted:0,running:1,pause:-1,finished:2
    this.status = -1;
    this.continueTask = [];
    this.pauseListener = [];
    this.finishListener = [];
    this.progressListener = {};

    this.progressHandler ={
        pause:()=>{
            this.status = -1
        },
        getCurrentProgress:()=>{
           return this.progress
        },
        progressIncrease:(num)=>{
            if(num < 0)
                throw  new Error("can't back");
            if(num + this.progress >= 100)
                this.status = 100;
        }
    }
}
progressTask.prototype.setFinishdNumber = function (num) {
    this.finishNumber = num
};
progressTask.prototype.start = function (task) {
    task(this.progressHandler);
    if(this.progress!=100){
        this.status =  -1;
    }
};
progressTask.prototype.continue = function (task) {
    this.continueTask.push(task);
};
progressTask.prototype.addProgressListener = function (evtType,callback,num) {
    switch(evtType){
        case 'onPause':
            console.log('');
            this.pauseListener.push(callback);
            break;
        case 'onFinish':
            console.log('');
            this.finishListener.push(callback);
            break;
        case 'onProgressArrivedIn':console.log('');break;
    }
};

task = new progressTask();

task.start(async (progressHandler)=>{
   await fetch('http://www.xxx.com');

});

