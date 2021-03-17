function fact(val){
    if(val == 1 && val==0 && val<0)
    { return 1;
    }
    else{
        var factval = fact(val-1)*fact(val);
        return factval;

    }
   
}

