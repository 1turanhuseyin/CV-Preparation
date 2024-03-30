let adSoyadInput = document.getElementById('ad-soyad-input');
let tabelaAdSoyad = document.getElementById('tabela-ad-soyad');

adSoyadInput.addEventListener('input', () => {
    tabelaAdSoyad.innerHTML = adSoyadInput.value;
})

let unvanInput = document.getElementById('unvan-input');
let tabelaUnvan = document.getElementById('tabela-unvan');

unvanInput.addEventListener('input', () => {
    tabelaUnvan.innerHTML = unvanInput.value;
})

let telefonInput = document.getElementById('telefon-input');
let telefon = document.getElementById('phone-number-js');

telefonInput.addEventListener('input', () => {
    telefon.innerHTML = telefonInput.value;
})

let mailInput = document.getElementById('mail-input');
let mail = document.getElementById('mail-js');

mailInput.addEventListener('input', () => {
    mail.innerHTML = mailInput.value;
})

let webInput = document.getElementById('web-input');
let website = document.getElementById('website-js');

webInput.addEventListener('input', () => {
    website.innerHTML = webInput.value;
})

let adresInput = document.getElementById('adres-input');
let adres = document.getElementById('adres-js');

adresInput.addEventListener('input', () => {
    adres.innerHTML = adresInput.value;
})

let egitimAciklamaInput = document.getElementById('egitim-aciklama-input');
let egitimAciklamaJs = document.getElementById('aciklama-js');

egitimAciklamaInput.addEventListener('input', () => {
    egitimAciklamaJs.innerHTML = egitimAciklamaInput.value;
})

let yetenekAciklamaInput = document.getElementById('yetenek-aciklama-input');
let yetenekAciklamaJs = document.getElementById('yetenek-aciklama-js');

yetenekAciklamaInput.addEventListener('input', () => {
    yetenekAciklamaJs.innerHTML = yetenekAciklamaInput.value;
})

let select = document.getElementById('select-js');
let okulContent = document.getElementById('okul-content');
let okulSayisiJs = document.getElementById('okul-sayisi-js');

select.addEventListener('change', () => {
    console.log(select.value);
    // let okul1 = document.getElementById('okul-1');
    // let okul2 = document.getElementById('okul-2');
    // let okul3 = document.getElementById('okul-3');
    if (select.value == 1) {
        okulContent.innerHTML = `
            <p class="informations" id="okul-1">1. Okul <input type="text" id="okul1-adi" maxlength="20"> <input type="text" id="okul1-aciklama" maxlength="20" placeholder="Açıklama"></p>
        `;
        let okul1Adi = document.getElementById('okul1-adi');
        let okul1Aciklama = document.getElementById('okul1-aciklama');

        okulSayisiJs.innerHTML = `
            <ul>
                <li id="okul-1-li"></li>
                <li id="okul-1-aciklama"></li>
            </ul>
        `;
        let okul1Li = document.getElementById('okul-1-li');
        okul1Adi.addEventListener('input', () => {
            okul1Li.innerHTML = okul1Adi.value;
        })

        let okul1AciklamaLi = document.getElementById('okul-1-aciklama');
        okul1Aciklama.addEventListener('input', () => {
            okul1AciklamaLi.innerHTML = okul1Aciklama.value;
        })
        
        // okul1.style.display = "block";
        // okul2.style.display = "none";
        // okul3.style.display = "none";
    }
    else if (select.value == 2) {
        okulContent.innerHTML = `
            <p class="informations" id="okul-1">1. Okul <input type="text" id="okul1-adi" maxlength="20"> <input type="text" id="okul1-aciklama" maxlength="20" placeholder="Açıklama"></p>

            <p class="informations" id="okul-2">2. Okul <input type="text" id="okul2-adi" maxlength="20"> <input type="text" id="okul2-aciklama" maxlength="20" placeholder="Açıklama"></p>
        `;
        let okul1Adi = document.getElementById('okul1-adi');
        let okul1Aciklama = document.getElementById('okul1-aciklama');
        let okul2Adi = document.getElementById('okul2-adi');
        let okul2Aciklama = document.getElementById('okul2-aciklama');

        okulSayisiJs.innerHTML = `
            <ul>
                <li id="okul-1-li"></li>
                <li id="okul-1-aciklama"></li>
                <li id="okul-2-li"></li>
                <li id="okul-2-aciklama"></li>
            </ul>
        `;
        let okul1Li = document.getElementById('okul-1-li');
        okul1Adi.addEventListener('input', () => {
            okul1Li.innerHTML = okul1Adi.value;
        })

        let okul1AciklamaLi = document.getElementById('okul-1-aciklama');
        okul1Aciklama.addEventListener('input', () => {
            okul1AciklamaLi.innerHTML = okul1Aciklama.value;
        })

        let okul2Li = document.getElementById('okul-2-li');
        okul2Adi.addEventListener('input', () => {
            okul2Li.innerHTML = okul2Adi.value;
        })

        let okul2AciklamaLi = document.getElementById('okul-2-aciklama');
        okul2Aciklama.addEventListener('input', () => {
            okul2AciklamaLi.innerHTML = okul2Aciklama.value;
        })

        // okul1.style.display = "block";
        // okul2.style.display = "block";
        // okul3.style.display = "none";
    }
    else if (select.value == 3) {
        okulContent.innerHTML = `
            <p class="informations" id="okul-1">1. Okul <input type="text" id="okul1-adi" maxlength="20"> <input type="text" id="okul1-aciklama" maxlength="20" placeholder="Açıklama"></p>

            <p class="informations" id="okul-2">2. Okul <input type="text" id="okul2-adi" maxlength="20"> <input type="text" id="okul2-aciklama" maxlength="20" placeholder="Açıklama"></p>

            <p class="informations" id="okul-3">3. Okul <input type="text" id="okul3-adi" maxlength="20"> <input type="text" id="okul3-aciklama" maxlength="20" placeholder="Açıklama"></p>
        `;
        let okul1Adi = document.getElementById('okul1-adi');
        let okul1Aciklama = document.getElementById('okul1-aciklama');
        let okul2Adi = document.getElementById('okul2-adi');
        let okul2Aciklama = document.getElementById('okul2-aciklama');
        let okul3Adi = document.getElementById('okul3-adi');
        let okul3Aciklama = document.getElementById('okul3-aciklama');

        okulSayisiJs.innerHTML = `
            <ul>
                <li id="okul-1-li"></li>
                <li id="okul-1-aciklama"></li>
                <li id="okul-2-li"></li>
                <li id="okul-2-aciklama"></li>
                <li id="okul-3-li"></li>
                <li id="okul-3-aciklama"></li>
            </ul>
        `;
        let okul1Li = document.getElementById('okul-1-li');
        okul1Adi.addEventListener('input', () => {
            okul1Li.innerHTML = okul1Adi.value;
        })

        let okul1AciklamaLi = document.getElementById('okul-1-aciklama');
        okul1Aciklama.addEventListener('input', () => {
            okul1AciklamaLi.innerHTML = okul1Aciklama.value;
        })

        let okul2Li = document.getElementById('okul-2-li');
        okul2Adi.addEventListener('input', () => {
            okul2Li.innerHTML = okul2Adi.value;
        })

        let okul2AciklamaLi = document.getElementById('okul-2-aciklama');
        okul2Aciklama.addEventListener('input', () => {
            okul2AciklamaLi.innerHTML = okul2Aciklama.value;
        })

        let okul3Li = document.getElementById('okul-3-li');
        okul3Adi.addEventListener('input', () => {
            okul3Li.innerHTML = okul3Adi.value;
        })

        let okul3AciklamaLi = document.getElementById('okul-3-aciklama');
        okul3Aciklama.addEventListener('input', () => {
            okul3AciklamaLi.innerHTML = okul3Aciklama.value;
        })
        // okul1.style.display = "block";
        // okul2.style.display = "block";
        // okul3.style.display = "block";
    }
    else {
        okulContent.innerHTML = ` `;
        // okul1.style.display = "none";
        // okul2.style.display = "none";
        // okul3.style.display = "none";
    }
})

let yetenekSelect = document.getElementById('yetenek-select-js');
let yetenekContent = document.getElementById('yetenek-content');
let yetenekSayisiJs = document.getElementById('yetenek-sayisi-js');

yetenekSelect.addEventListener('change', () => {
    console.log(yetenekSelect.value);

    if (yetenekSelect.value == 1) {
        yetenekContent.innerHTML = `
            <p class="informations" id="yetenek-1">1. Yetenek <input type="text" id="yetenek1-adi" maxlength="20"> <input type="text" id="yetenek1-aciklama" maxlength="20" placeholder="Açıklama"></p>
        `;
        let yetenek1Adi = document.getElementById('yetenek1-adi');
        let yetenek1Aciklama = document.getElementById('yetenek1-aciklama');

        yetenekSayisiJs.innerHTML = `
            <ul>
                <li id="yetenek-1-li"></li>
                <li id="yetenek-1-aciklama"></li>
            </ul>
        `;

        let yetenek1Li = document.getElementById('yetenek-1-li');
        yetenek1Adi.addEventListener('input', () => {
            yetenek1Li.innerHTML = yetenek1Adi.value;
        })

        let yetenek1AciklamaLi = document.getElementById('yetenek-1-aciklama');
        yetenek1Aciklama.addEventListener('input', () => {
            yetenek1AciklamaLi.innerHTML = yetenek1Aciklama.value;
        })
    }
    else if (yetenekSelect.value == 2) {
        yetenekContent.innerHTML = `
            <p class="informations" id="yetenek-1">1. Yetenek <input type="text" id="yetenek1-adi" maxlength="40"> <input type="text" id="yetenek1-aciklama" maxlength="60" placeholder="Açıklama"></p>

            <p class="informations" id="yetenek-2">2. Yetenek <input type="text" id="yetenek2-adi" maxlength="40"> <input type="text" id="yetenek2-aciklama" maxlength="60" placeholder="Açıklama"></p>
        `;
        let yetenek1Adi = document.getElementById('yetenek1-adi');
        let yetenek1Aciklama = document.getElementById('yetenek1-aciklama');
        let yetenek2Adi = document.getElementById('yetenek2-adi');
        let yetenek2Aciklama = document.getElementById('yetenek2-aciklama');

        yetenekSayisiJs.innerHTML = `
            <ul>
                <li id="yetenek-1-li"></li>
                <li id="yetenek-1-aciklama"></li>
                <li id="yetenek-2-li"></li>
                <li id="yetenek-2-aciklama"></li>
            </ul>
        `;

        let yetenek1Li = document.getElementById('yetenek-1-li');
        yetenek1Adi.addEventListener('input', () => {
            yetenek1Li.innerHTML = yetenek1Adi.value;
        })

        let yetenek1AciklamaLi = document.getElementById('yetenek-1-aciklama');
        yetenek1Aciklama.addEventListener('input', () => {
            yetenek1AciklamaLi.innerHTML = yetenek1Aciklama.value;
        })

        let yetenek2Li = document.getElementById('yetenek-2-li');
        yetenek2Adi.addEventListener('input', () => {
            yetenek2Li.innerHTML = yetenek2Adi.value;
        })

        let yetenek2AciklamaLi = document.getElementById('yetenek-2-aciklama');
        yetenek2Aciklama.addEventListener('input', () => {
            yetenek2AciklamaLi.innerHTML = yetenek2Aciklama.value;
        })
    }
    else {
        yetenekContent.innerHTML = ` `;
    }
})

let hakkimdaAciklamaInput = document.getElementById('hakkimda-aciklama-input'); 
let hakkimdaAciklamaJs = document.getElementById('hakkimda-aciklama-js'); 

hakkimdaAciklamaInput.addEventListener('input', () => {
    hakkimdaAciklamaJs.innerHTML = hakkimdaAciklamaInput.value;
})

let isdeneyimiAciklamaInput = document.getElementById('isdeneyimi-aciklama-input');
let isdeneyimiAciklamaJs = document.getElementById('isdeneyimi-aciklama-js'); 

isdeneyimiAciklamaInput.addEventListener('input', () => {
    isdeneyimiAciklamaJs.innerHTML = isdeneyimiAciklamaInput.value;
})

let arkaplanRengiInput = document.getElementById('arkaplan-rengi-input');
let arkaplanRengiJs = document.getElementById('cv-container-js');

arkaplanRengiInput.addEventListener('input', () => {
    console.log("Arka plan rengi değişti!");
    arkaplanRengiJs.style.backgroundColor = arkaplanRengiInput.value;
})

let solkolonRengiInput = document.getElementById('solkolon-rengi-input');
let solkolonRengiJs = document.getElementById('user-side-js');

solkolonRengiInput.addEventListener('input', () => {
    console.log("Arka plan rengi değişti!");
    solkolonRengiJs.style.backgroundColor = solkolonRengiInput.value;
})

let isimkutusuRengiInput = document.getElementById('isimkutusu-rengi-input');
let isimkutusuRengiJs = document.getElementById('signboard-js');

isimkutusuRengiInput.addEventListener('input', () => {
    isimkutusuRengiJs.style.backgroundColor = isimkutusuRengiInput.value;
})

let isimkutusuYazirengiInput = document.getElementById('isimkutusu-yazirengi-input');
let isimkutusuYazirengiJs = document.getElementById('signboard-js');

isimkutusuYazirengiInput.addEventListener('input', () => {
    isimkutusuYazirengiJs.style.color = isimkutusuYazirengiInput.value;
})

let yaziTipiInput = document.getElementById('yazitipi-select-js');
let yaziTipiJs = document.getElementById('cv-container-js');

yaziTipiInput.addEventListener('change', () => {
    if (yaziTipiInput.value == "system") {
        yaziTipiJs.style.fontFamily = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
    }
    else if (yaziTipiInput.value == "bold") {
        yaziTipiJs.style.fontFamily = "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif";
    }
    else if (yaziTipiInput.value == "courier") {
        console.log("Daktilo");
        yaziTipiJs.style.fontFamily = "'Courier New', Courier, monospace";
    }
    else {
        yaziTipiJs.style.fontFamily = "none";
    }
})


let fotoCerceveInput = document.getElementById('foto-cerceve-select-js');
let fotoCerceveJs = document.getElementById('my-photo-js');

fotoCerceveInput.addEventListener('change', () => {
    if (fotoCerceveInput.value == "koseli") {
        fotoCerceveJs.style.borderRadius = "1%";
    }
    else if (fotoCerceveInput.value == "oval") {
        fotoCerceveJs.style.borderRadius = "15%";
    }
    else if (fotoCerceveInput.value == "yuvarlak") {
        fotoCerceveJs.style.borderRadius = "50%";
    }
})

let cizgiRengiInput = document.getElementById('cizgi-rengi-input');
let cizgiRengiJs = document.querySelectorAll(".myHr");

cizgiRengiInput.addEventListener('input', () => {
    cizgiRengiJs.forEach(hr => {
        hr.style.borderColor = cizgiRengiInput.value;
    });
});

let cizgiSekliSelectInput = document.getElementById('cizgi-sekli-select-js');
let cizgiSekliJs = document.querySelectorAll(".myHr");

cizgiSekliSelectInput.addEventListener('input', () => {
    if (cizgiSekliSelectInput.value == "dotted") {
        cizgiSekliJs.forEach(hr => {
            hr.style.borderStyle = cizgiSekliSelectInput.value;
        });
    }
    else if (cizgiSekliSelectInput.value == "dashed") {
        cizgiSekliJs.forEach(hr => {
            hr.style.borderStyle = cizgiSekliSelectInput.value;
        });
    }
    else if (cizgiSekliSelectInput.value == "solid") {
        cizgiSekliJs.forEach(hr => {
            hr.style.borderStyle = cizgiSekliSelectInput.value;
        });
    }
})



