level 1 & 2 
while (true) {
    var max = 0;
    var imax = 0;
    for (var i = 0; i < 8; i++) {
        var mountainH = parseInt(readline()); 
        if (mountainH > max) {
            max = mountainH;
            imax = i;
        }
    }

    print(imax);
