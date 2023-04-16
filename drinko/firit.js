var data = {
    save: (key, value) => {
        return localStorage.setItem(key, value)
    },
    get: (key) => {
        if(localStorage.getItem(key) == "null" || !localStorage.getItem(key)){
            return null
        }
        return localStorage.getItem(key) || null
    }
}

var _ = {
    http: async (url,{
        method = "GET",
        headers = {},
        body = "",
        cookies = ""
    }={}) => {
        if(cookies) {
            let Cookies = ""
            let Cookies_json = []
            for(let i =0;i<Object.keys(cookies).length;i++) {
                let r = {
                    name: Object.keys(cookies)[i], 
                    value: Object.values(cookies)[i]
                } 
                Cookies_json.push(r)
            }
            Cookies_json.forEach(c => {
                Cookies += c.name + "=" + c.value + ";"
            })
    
            cookies = Cookies 
        }
        let keys = Object.keys(cookies)
        let incld = false
        
        keys.forEach(k => {
            if(k.toLocaleLowerCase() == "cookie" || k.toLocaleLowerCase() == "cookies") {
                incld = true
            }
        })
        if(!incld) {
            headers["cookie"] = cookies
        }
        console.log(headers)
        let add = {}
        if(method.toUpperCase() !== "GET") add = {body}
        if(headers !== {}) add = {...add, headers}
        if(method.toUpperCase() !== "GET") add = {...add, method}
        
        let r = await fetch(url, {
            method: method,
            ...add
        })
        r.text = await r.text()
        r.json = await r.json()
        return r 
        
    },

    html: (selector) => {
        let sel = selector
        return {
            watch: (e) => {
                e({
                    echo: (text) => {
                        document.querySelectorAll(sel).forEach(s => {
                            s.innerHTML += text
                        })
                    },

                    newLine: (text = "") => {
                        document.querySelectorAll(sel).forEach(s => {
                            s.innerHTML += "<p></p>"+text
                        })
                    },

                    goto: (newSelector) => {
                        sel = newSelector
                    },

                })
            },



            set: (text) => {
                document.querySelectorAll(sel).forEach(s => {
                    s.innerHTML = text
                })
            }
        }
    }
}

var _import = async (url) => {
    document.querySelector("head").innerHTML += `<script src="${url}"></script>`
}

var _import_css = async (url) => {
    document.querySelector("head").innerHTML += `<link rel="stylesheet" href="${url}">`
}