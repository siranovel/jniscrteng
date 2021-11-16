// sample6.js
'use strict';
/*
 *
 */
function echo(message) {
    print(message);
}

function test_paramX() {
    print("test_paramX in")
}
function test_paramS(id, name, memo) {
    print("test_paramS in", id, name, memo)
}
function test_paramN(iv, lv, fv, dv) {
    print("test_paramN in")
    print("iv:", iv)
    print("lv:", lv)
    print("fv:", fv)
    print("dv:", dv)
}
function test_paramAV(aiv, alv, afv, adv) {
    print("test_paramAV in")
    dspArray("aiv", aiv);
    dspArray("alv", alv);
    dspArray("afv", afv);
    dspArray("adv", adv);

}
function dspArray(name, axv) {
	print("---", name, "---")
    for (var key in axv) {
	    print("index:", key);
	    if (isArray(axv[key])) {
	        dspArray("", axv[key])
	        print()
	    } else {
		    print("data:", axv[key])
	    }
    }
   
}
function test_paramHV(hv) {
    print("test_paramHV in")
    dspArray("hv", hv)
}
function isArray(value) {
    return value
        && typeof value == 'object'
        && typeof value.length == 'number';
}

function test_returnIV(iv) {
    print("test_returnIV in:", iv)
    return iv * 2
}
function test_returnLV(lv) {
    print("test_returnLV in:", lv)
    return lv * 2
}
function test_returnFV(fv) {
    print("test_returnFV in:", fv)
    return fv * 2
}
function test_returnDV(dv) {
    print("test_returnDV in:", dv)
    return dv * 2
}
function test_returnPV() {
    print("test_returnPV in")
    return "Hello javaScript world!!";
}
function test_returnAIV() {
    var aiv = [100, 110, 120, 130, 140]
    print("test_returnAIV in")
    return aiv
}
function test_returnALV() {
    var alv = [200, 210, 220, 230, 240]
    print("test_returnALV in")
    return alv
}
function test_returnAFV() {
    var afv = [300.5, 310.5, 320.5, 330.5, 340.5]
    print("test_returnAFV in")
    return afv
}
function test_returnADV() {
    var adv = [400.8, 410.8, 420.8, 430.8, 440.8]
    print("test_returnADV in")
    return adv
}
function test_returnAOV() {
    var aov = [500, 500.3, 'Hello javaScript world!!'
                  , [600, 610, 620, 630, 640]
                  , [700.3, 710.3, 720.3, 730.3, 740.3],
              ]
              
    print("test_returnAOV in")
    return aov
}
function test_returnHV() {
    var hv = {
        key01: 1000,
        key02: 4000.6,
        key03: 'Hello javaScript world!!',
        key04: [100, 110, 120, 130, 140],
        key05: [400.8, 410.8, 420.8, 430.8, 440.8],
        key06: {
            keyX01: 1100,
            keyX02: 4100.7,
            keyX03: 'sub Hash',
            keyX04: [200, 210],
            keyX05: [500.5, 510.5],
        },
    }
    print("test_returnHV in")
    return hv
}
function test_returnAHV() {
    var ahv = [
         {key01: 1100, key02: 'value01'}
        ,{key01: 1100, key02: 'value01'}
        ,{key01: 1100, key02: 'value01'}
        ,{key01: 1100, key02: 'value01'}
    ]
    
    print("test_returnAHV in")
    return ahv
    
}
/*
 * クラス
 */
var HogeX = class  {
    constructor() { }
    
// staticメゾッド
    static staticTest_paramX() {
        print("staticTest_paramX in")
    }
    static staticTest_paramS(id, name, memo) {
        print("staticTest_paramS in", id, name, memo)
    }
    static staticTest_paramN(iv, lv, fv, dv) {
        print("staticTest_paramN in")
        print("iv:", iv)
        print("lv:", lv)
        print("fv:", fv)
        print("dv:", dv)
    }
    static staticTest_paramAV(aiv, alv, afv, adv) {
        print("staticTest_paramAV in")
        dspArray("aiv", aiv);
        dspArray("alv", alv);
        dspArray("afv", afv);
        dspArray("adv", adv);
    }
    static staticTest_paramHV(hv) {
        print("staticTest_paramHV in")
        dspArray("hv", hv)
    }
    static staticTest_returnIV(iv) {
        print("staticTest_returnIV in:", iv)
        return iv * 3
    }
    static staticTest_returnLV(lv) {
        print("staticTest_returnLV in:", lv)
        return lv * 3
    }
    static staticTest_returnFV(fv) {
        print("staticTest_returnFV in:", fv)
        return fv * 3
    }
    static staticTest_returnDV(dv) {
            print("staticTest_returnDV in:", dv)
            return dv * 3
    }
    static staticTest_returnPV() {
        print("staticTest_returnPV in")
        return "Hello javaScript world!!";
    }
    static staticTest_returnAIV() {
        var aiv = [100, 110, 120, 130, 140]
        print("staticTest_returnAIV in")
        return aiv
    }
    static staticTest_returnALV() {
        var alv = [200, 210, 220, 230, 240]
        print("staticTest_returnALV in")
        return alv
    }
    static staticTest_returnAFV() {
        var afv = [300.5, 310.5, 320.5, 330.5, 340.5]
        print("staticTest_returnAFV in")
        return afv
    }
    static staticTest_returnADV() {
        var adv = [400.8, 410.8, 420.8, 430.8, 440.8]
        print("staticTest_returnADV in")
        return adv
    }
    static staticTest_returnAOV() {
        var aov = [500, 500.3, 'Hello javaScript world!!'
                      , [600, 610, 620, 630, 640]
                      , [700.3, 710.3, 720.3, 730.3, 740.3]
                  ]
                  
        print("staticTest_returnAOV in")
        return aov
    }
    static staticTest_returnHV() {
        var hv = {
            key01: 1000,
            key02: 4000.6,
            key03: 'Hello javaScript world!!',
            key04: [100, 110, 120, 130, 140],
            key05: [400.8, 410.8, 420.8, 430.8, 440.8],
            key06: {
                keyX01: 1100,
                keyX02: 4100.7,
                keyX03: 'sub Hash',
                keyX04: [200, 210],
                keyX05: [500.5, 510.5],
            },
        }
        print("staticTest_returnHV in")
        return hv
    }
    static staticTest_returnAHV() {
        var ahv = [
             {key01: 1100, key02: 'value01'}
            ,{key01: 1100, key02: 'value01'}
            ,{key01: 1100, key02: 'value01'}
            ,{key01: 1100, key02: 'value01'}
        ]
        
        print("staticTest_returnAHV in")
        return ahv
    }
    
// objectメゾッド
    echo(message) {
        print(message);
    }
    objectTest_paramX() {
        print("objectTest_paramX in")
    }
    objectTest_paramS(id, name, memo) {
        print("objectTest_paramS in", id, name, memo)
    }
    objectTest_paramN(iv, lv, fv, dv) {
        print("objectTest_paramN in")
        print("iv:", iv)
        print("lv:", lv)
        print("fv:", fv)
        print("dv:", dv)
    }
    objectTest_paramAV(aiv, alv, afv, adv) {
        print("objectTest_paramAV in")
        dspArray("aiv", aiv);
        dspArray("alv", alv);
        dspArray("afv", afv);
        dspArray("adv", adv);
    }
    objectTest_paramHV(hv) {
        print("objectTest_paramHV in")
        dspArray("hv", hv)
    }
    objectTest_returnIV(iv) {
        print("objectTest_returnIV in:", iv)
        return iv * 3
    }
    objectTest_returnLV(lv) {
        print("objectTest_returnLV in:", lv)
        return lv * 3
    }
    objectTest_returnFV(fv) {
        print("objectTest_returnFV in:", fv)
        return fv * 3
    }
    objectTest_returnDV(dv) {
            print("objectTest_returnDV in:", dv)
            return dv * 3
    }
    objectTest_returnPV() {
        print("objectTest_returnPV in")
        return "Hello javaScript world!!";
    }
    objectTest_returnAIV() {
        var aiv = [100, 110, 120, 130, 140]
        print("objectTest_returnAIV in")
        return aiv
    }
    objectTest_returnALV() {
        var alv = [200, 210, 220, 230, 240]
        print("objectTest_returnALV in")
        return alv
    }
    objectTest_returnAFV() {
        var afv = [300.5, 310.5, 320.5, 330.5, 340.5]
        print("objectTest_returnAFV in")
        return afv
    }
    objectTest_returnADV() {
        var adv = [400.8, 410.8, 420.8, 430.8, 440.8]
        print("objectTest_returnADV in")
        return adv
    }
    objectTest_returnAOV() {
        var aov = [500, 500.3, 'Hello javaScript world!!'
                      , [600, 610, 620, 630, 640]
                      , [700.3, 710.3, 720.3, 730.3, 740.3]
                  ]
                  
        print("objectTest_returnAOV in")
        return aov
    }
    objectTest_returnHV() {
        var hv = {
            key01: 1000,
            key02: 4000.6,
            key03: 'Hello javaScript world!!',
            key04: [100, 110, 120, 130, 140],
            key05: [400.8, 410.8, 420.8, 430.8, 440.8],
            key06: {
                keyX01: 1100,
                keyX02: 4100.7,
                keyX03: 'sub Hash',
                keyX04: [200, 210],
                keyX05: [500.5, 510.5],
            },
        }
        print("objectTest_returnHV in")
        return hv
    }

    objectTest_returnAHV() {
        var ahv = [
             {key01: 1100, key02: 'value01'}
            ,{key01: 1100, key02: 'value01'}
            ,{key01: 1100, key02: 'value01'}
            ,{key01: 1100, key02: 'value01'}
        ]
        
        print("objectTest_returnAHV in")
        return ahv
    }
};
 
var HogeY = class {
    constructor(id, name, memo) {
        this.id = id;
        this.name = name;
        this.memo = memo;
    }
};

var hogeX = new HogeX();
