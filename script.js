function span_each(id, span_class){
    var target = document.getElementById(id);
    var len = target.innerHTML.length;
    var new_str = "";

    for (var i=0; i<len; ++i){
        // Retain original span tags
        if (i < len-5 && target.innerHTML.substring(i, i+5)=="<span"){
            while (i>6 && target.innerHTML.substring(i-7, i)!="</span>"){
                new_str += target.innerHTML.charAt(i);
                i++;
            }
        }
        
        new_str += "<span class='" + span_class + "'>" + target.innerHTML.charAt(i) + "</span>";
    }

    target.innerHTML = new_str;
}

span_each("main-content", "term-char");
