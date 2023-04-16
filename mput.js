const compile = (code) => JSON.parse("{"+code.split(";").join("\n").split("\n").filter(e=>e && !e.startsWith("//")).map(line => { 
    line = line.split(" ")
    return `"${line.shift()}": ["${line.map(l => l.split('"').join("$STRI1")).join(`","`)}"],`
}).join("").slice(0,-1) + "}")