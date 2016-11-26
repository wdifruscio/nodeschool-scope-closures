function foo(){
    var bar;    
    quux = 1;
    function zip(){
        var quux = 100;
        bar = true;
    }
    return zip;
}