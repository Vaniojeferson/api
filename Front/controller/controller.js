

class controller{



    constructor(codigo, total, carrinho, tipodesconto){

        
         
        this._crcTable = [0x0000, 0x1021, 0x2042, 0x3063, 0x4084, 0x50a5,
            0x60c6, 0x70e7, 0x8108, 0x9129, 0xa14a, 0xb16b,
            0xc18c, 0xd1ad, 0xe1ce, 0xf1ef, 0x1231, 0x0210,
            0x3273, 0x2252, 0x52b5, 0x4294, 0x72f7, 0x62d6,
            0x9339, 0x8318, 0xb37b, 0xa35a, 0xd3bd, 0xc39c,
            0xf3ff, 0xe3de, 0x2462, 0x3443, 0x0420, 0x1401,
            0x64e6, 0x74c7, 0x44a4, 0x5485, 0xa56a, 0xb54b,
            0x8528, 0x9509, 0xe5ee, 0xf5cf, 0xc5ac, 0xd58d,
            0x3653, 0x2672, 0x1611, 0x0630, 0x76d7, 0x66f6,
            0x5695, 0x46b4, 0xb75b, 0xa77a, 0x9719, 0x8738,
            0xf7df, 0xe7fe, 0xd79d, 0xc7bc, 0x48c4, 0x58e5,
            0x6886, 0x78a7, 0x0840, 0x1861, 0x2802, 0x3823,
            0xc9cc, 0xd9ed, 0xe98e, 0xf9af, 0x8948, 0x9969,
            0xa90a, 0xb92b, 0x5af5, 0x4ad4, 0x7ab7, 0x6a96,
            0x1a71, 0x0a50, 0x3a33, 0x2a12, 0xdbfd, 0xcbdc,
            0xfbbf, 0xeb9e, 0x9b79, 0x8b58, 0xbb3b, 0xab1a,
            0x6ca6, 0x7c87, 0x4ce4, 0x5cc5, 0x2c22, 0x3c03,
            0x0c60, 0x1c41, 0xedae, 0xfd8f, 0xcdec, 0xddcd,
            0xad2a, 0xbd0b, 0x8d68, 0x9d49, 0x7e97, 0x6eb6,
            0x5ed5, 0x4ef4, 0x3e13, 0x2e32, 0x1e51, 0x0e70,
            0xff9f, 0xefbe, 0xdfdd, 0xcffc, 0xbf1b, 0xaf3a,
            0x9f59, 0x8f78, 0x9188, 0x81a9, 0xb1ca, 0xa1eb,
            0xd10c, 0xc12d, 0xf14e, 0xe16f, 0x1080, 0x00a1,
            0x30c2, 0x20e3, 0x5004, 0x4025, 0x7046, 0x6067,
            0x83b9, 0x9398, 0xa3fb, 0xb3da, 0xc33d, 0xd31c,
            0xe37f, 0xf35e, 0x02b1, 0x1290, 0x22f3, 0x32d2,
            0x4235, 0x5214, 0x6277, 0x7256, 0xb5ea, 0xa5cb,
            0x95a8, 0x8589, 0xf56e, 0xe54f, 0xd52c, 0xc50d,
            0x34e2, 0x24c3, 0x14a0, 0x0481, 0x7466, 0x6447,
            0x5424, 0x4405, 0xa7db, 0xb7fa, 0x8799, 0x97b8,
            0xe75f, 0xf77e, 0xc71d, 0xd73c, 0x26d3, 0x36f2,
            0x0691, 0x16b0, 0x6657, 0x7676, 0x4615, 0x5634,
            0xd94c, 0xc96d, 0xf90e, 0xe92f, 0x99c8, 0x89e9,
            0xb98a, 0xa9ab, 0x5844, 0x4865, 0x7806, 0x6827,
            0x18c0, 0x08e1, 0x3882, 0x28a3, 0xcb7d, 0xdb5c,
            0xeb3f, 0xfb1e, 0x8bf9, 0x9bd8, 0xabbb, 0xbb9a,
            0x4a75, 0x5a54, 0x6a37, 0x7a16, 0x0af1, 0x1ad0,
            0x2ab3, 0x3a92, 0xfd2e, 0xed0f, 0xdd6c, 0xcd4d,
            0xbdaa, 0xad8b, 0x9de8, 0x8dc9, 0x7c26, 0x6c07,
            0x5c64, 0x4c45, 0x3ca2, 0x2c83, 0x1ce0, 0x0cc1,
            0xef1f, 0xff3e, 0xcf5d, 0xdf7c, 0xaf9b, 0xbfba,
            0x8fd9, 0x9ff8, 0x6e17, 0x7e36, 0x4e55, 0x5e74,
            0x2e93, 0x3eb2, 0x0ed1, 0x1ef0]; 

        this._arrayCod = [];
        this._arrayValores = [];
        this._linhaPix;      
        this._código = document.getElementById("codigo");
        this._tipoDesconto = document.getElementById("tipodesconto");
        this._desconto = document.getElementById("desconto");
        this._carrinho = document.getElementById("carrinho");
        this._total = document.getElementById("total");
        this._resDesconto = document.getElementById("resDesconto");
        this._valueDesconto = document.getElementById("valueDesconto");
        this._qrCode = document.getElementById('qr');
        this._linPix = document.getElementById('pix');
        this._resumo = document.getElementById('resumo');
        this._teste = document.getElementById('list');



       

        this.inicialize();
        
    }

   

    inicialize(){

        document.querySelectorAll("#buscar").forEach(btn=>{

            btn.addEventListener('click' ,e=>{
                this.getContent();
                //this.getPagamentos();

            });
        });

        document.querySelectorAll("#vamos").forEach(btn=>{

            btn.addEventListener('click' ,e=>{
                //this.getContent();
                this.getPagamentos();
                
            });
        });

        document.querySelectorAll('#pagamento').forEach(btn=>{

            btn.addEventListener('click', e=>{
                this.descontar();

            });
        });


        document.querySelectorAll('#generatePayment').forEach(btn=>{

            btn.addEventListener('click' ,e=>{
                
                this.pix();
                this.postContent();
                

            });
        });

        document.querySelectorAll('#clean').forEach(btn=>{

            btn.addEventListener('click' ,e=>{
                this.clear();
                

            });
        });

        
        document.addEventListener("keypress",e=>{
            if(e.key === "Enter"){
                let bress = document.querySelector('.abc');
                bress.click();
            }
        });


        document.querySelectorAll('#icone').forEach(btn=>{

            btn.addEventListener('click' ,e=>{
                this.execCopy();

            });
        });


        document.querySelectorAll('#resume').forEach(btn=>{

            btn.addEventListener('click' ,e=>{
                this.tableCreate();
                
            });
        });
        
     
        /*document.querySelector('.element').addEventListener('mouseover',() => {
            document.querySelector('.element').style.cursor = 'pointer';
          });*/
    }


    // listar intem da tabela de produtos
    async getContent(){

        var id = this._código.value;
               
        try {
            const response = await fetch('https://saldao.herokuapp.com/lista/'+ id);
            const data = await response.json();
            this.show(data);
            
        }catch (error) {
            console.log(error);
    
        }

        this._código.value = '';
        this._código.focus();

        
    }


    // salvar valores na tabela de valores recebidos
    async postContent(){

        const colums = {
            idprodutos: String(this._arrayCod),
            valortotal: this.sumTot(this._arrayValores).toFixed(2).replace('.',','),
            valorcomdesconto:  this.descontar().toFixed(2).replace('.',','),
            valordodesconto: (this.sumTot(this._arrayValores) - this.descontar()).toFixed(2).replace('.',',')
            
        }

        const init = {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },

            body: JSON.stringify(colums)
            
        }    
    
        await fetch('https://saldao.herokuapp.com/pagamentos',init);
        
    }

    async getPagamentos(){
            
        try {
            const response = await fetch('https://saldao.herokuapp.com/pagamentos');
            const data = await response.json();
            
            this.showPag(data);

        }catch (error) {
            console.log(error);
    
        }  

    }

    showPag(dados){
        
        let tbody = document.getElementById('tbody'); 
        //console.log(tbody.tr)

        for( let i = 0; i < dados.length ; i++){
            
            let tr = tbody.insertRow();

            let td_id = tr.insertCell();
            td_id.innerHTML = dados[i].id

            let td_idprodutos = tr.insertCell();
            td_idprodutos.innerHTML = dados[i].idprodutos;

            let valor_total = tr.insertCell();
            valor_total.innerHTML = dados[i].valortotal;

            let valor_comdesconto = tr.insertCell();
            valor_comdesconto.innerHTML = dados[i].valorcomdesconto;

            let valor_dodesconto = tr.insertCell();
            valor_dodesconto.innerHTML = dados[i].valordodesconto;
        
        }
 
        
    }


    
    show(dados){
        this._arrayCod.push(dados.id);
        this._arrayValores.push(parseInt(dados.valor));
        let soma = this.sumTot(this._arrayValores);

       
        let result = '';
    
        for( let obj in dados){
          result = `<strong>Id:</strong> ${dados.id}<br><br>
                    <strong>Descrição:</strong> ${dados.descrição}<br><br>
                    <strong>Código:</strong> ${dados.código}<br><br>
                    <strong>Valor:</strong> ${Number(dados.valor).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}<br><br>
                    ______________________________________________<br><br>`
        }
        
        this._carrinho.innerHTML += result;
        
        this._total.innerHTML = `<strong>Valor Total:</strong> ${Number(soma).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
        
        if(result.length > 0){
            carrinho.style.background= "#C8DFF4";
            total.style.background= "#C8DFF4"; 
        }
        
    }


    execCopy(){

        let text = this._linPix;
        navigator.clipboard.writeText(text);
    }


    showPanelCreate(){

        document.querySelector('#dados').style.display = "block"
        //document.querySelector('#paragrafo').style.display = "block"
    }


    

    sumTot(array){

        var sum = 0;
        for (var i = 0; i < array.length; i++) {
             sum +=  array[i];  
             
        } 
        return sum
    }


    descontar(){
    
        var descontos = this._desconto.value;
       
        let result = this.sumTot(this._arrayValores);
        
        if(this._tipoDesconto.value !=="%" && this._tipoDesconto.value !=="R$"){
           // alert('Selecione do tipo de desconto')
                    
        }
        else if(this._tipoDesconto.value === "%"){
            result = result - (result * descontos / 100)
           
        }
        else if(this._tipoDesconto.value === "R$"){
            result = result - descontos
        }
        
        if(descontos > 0 & tipodesconto.value !==""){
    
            this._resDesconto.innerHTML = `<strong>Total com desconto:</strong> ${result.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`
            this._resDesconto.style.background= "#C8DFF4";
            this._valueDesconto.style.background= "#C8DFF4";

            this._valueDesconto.innerHTML = `<strong>Total de Desconto:</strong> ${(this.sumTot(this._arrayValores) - result)   .toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }`   

        }

        return result
    }

    
    pix(){
        
        let totValue = this.descontar();
    
        let valor = 0;
        if(totValue > 0){
    
            valor = totValue.toFixed(2);
        }
        else{
            valor = this.sumTot(this._arrayValores).toFixed(2);
        }
    
        var ID2 = ''  
        var lenValor = valor.length
        ID2 = String(this._arrayCod)
        var lenID2 = ID2.length
        
        var Infor = "SaldaoTbonus" 
        var lenInfor = Infor.length 
        var ID3 = lenInfor + 4
    
        if(lenID2 >9){
            lenID2 = lenID2
        }
        else{
            lenID2 = "0" + lenID2
        }
        
        //Criação da linha
        var linha = "00020126520014BR.GOV.BCB.PIX01141080452900011102"+ lenInfor + Infor
    
        linha = linha.replace(',','.')
     
        if (lenValor > 9){
            linha = linha + "52040000530398654" + lenValor + valor
        }
        else{linha = linha + "520400005303986540" + lenValor + valor}
    
        if (ID3 > 9){
            linha = linha + "5802BR5913Industria Fox6008CABREUVA62" + ID3 + "05" + lenInfor + Infor + 6304
        }
        else{linha = linha + "5802BR5913Industria Fox6008CABREUVA620" + ID3 + "05"  + lenInfor + Infor + 6304}
        linha = linha.replace(',','/')
        linha = linha + this.crc16(linha).toString(16).toUpperCase();
        this._linPix = linha
        let googleAPI ='https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl='
        googleAPI = googleAPI + linha
        this._qrCode.src = googleAPI

        this.showPanelCreate(); 
        
    }
   

    clear(){
        location.reload();
    }

    crc16(str) {
        var crc = 0xFFFF;
        var j, i;
    
        for (i = 0; i < str.length; i++) {
    
             var c = str.charCodeAt(i);
            if (c > 255) {
                throw new RangeError();
            }
            j = (c ^ (crc >> 8)) & 0xFF;
            crc = this._crcTable[j] ^ (crc << 8);
        }
    
        return  ((crc ^ 0) & 0xFFFF); 
    }

   

    get codigo(){
        return this._código.innerHTML;

    }

    set codigo(value){
        return this._código.innerHTML =value;

    }

    get tipoDesconto(){
        return this._tipoDesconto.innerHTML;

    }

    set tipoDesconto(value){
        return this._tipoDesconto.innerHTML =value;

    }

    get desconto(){
        return this._desconto.innerHTML;

    }

    set desconto(value){
        return this._desconto.innerHTML =value;

    }

    get total(){
        return this._total.innerHTML;

    }

    set total(value){
        return this._total.innerHTML = value;

    }

}

