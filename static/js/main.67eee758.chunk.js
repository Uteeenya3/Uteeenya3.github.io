(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(a,e,n){},14:function(a,e,n){},15:function(a,e,n){"use strict";n.r(e);var t=n(0),r=n.n(t),l=n(6),m=n.n(l),s=(n(13),n(7)),i=n(1),o=n(2),c=n(4),u=n(3),h=(n(14),function(a){return 0!==a.stock?r.a.createElement("div",{style:{border:"1px solid green",width:300,margin:"auto"}},r.a.createElement("p",null,"Nama Menu: ",a.namaMenu),r.a.createElement("p",null,"Harga: Rp. ",a.hargaMenu),r.a.createElement("p",null,"Stock: ",a.stock)):null}),g=function(a){Object(c.a)(n,a);var e=Object(u.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{style:{border:"1px solid green",width:300,margin:"auto"}},r.a.createElement("p",null,"Nama Menu: ",this.props.namaMenu),r.a.createElement("p",null,"Harga: ",this.props.hargaMenu))}}]),n}(t.Component),d=function(a){Object(c.a)(n,a);var e=Object(u.a)(n);function n(){var a;return Object(i.a)(this,n),(a=e.call(this)).handleGantiNama=function(e){a.setState({namaResto:e})},a.handleChangeNamaPembeli=function(e){a.setState({namaPembeli:e.target.value})},a.handleChangeKeterangan=function(e){a.setState({keterangan:e.target.value})},a.handleChangeJenisPembayaran=function(e){a.setState({jenisPembayaran:e.target.value})},a.handleChange=function(e){var n=e.target.name,t=e.target.value;a.setState(Object(s.a)({},n,t))},a.state={namaResto:"Bakso Bowo",namaPembeli:"",keterangan:"",jenisPembayaran:"",menuMakanan:[{nama:"Bakso Bakar",harga:25e3,stock:10},{nama:"Mie Ayam",harga:3e4,stock:1}],MenuMinuman:[{id:1,nama:"Thai Tea",harga:1e4},{id:2,nama:"Es Tea",harga:15e3},{id:3,nama:"Jus Tomat",harga:2e4},{id:4,nama:"Jus Jeruk",harga:15e3},{id:5,nama:"Jus Anggur",harga:2e4}]},a}return Object(o.a)(n,[{key:"render",value:function(){var a=this;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Resto ",this.state.namaResto),r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return a.handleGantiNama("Adiey")}},"Ganti Nama Resto"),r.a.createElement("div",{className:"row",style:{marginTop:"10px"}},r.a.createElement("div",{className:"col-md-4 offset-md-4"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Nama pembeli: "),r.a.createElement("input",{className:"form-control",name:"namaPembeli",onChange:this.handleChange,value:this.state.namaPembeli}),r.a.createElement("samll",null,"Nama pembeli: ",this.state.namaPembeli)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Keterangan: "),r.a.createElement("textarea",{className:"form-control",name:"keterangan",onChange:this.handleChange,value:this.state.keterangan}),r.a.createElement("small",null,"Keterangan: ",this.state.keterangan)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Jenis pembayaran: "),r.a.createElement("select",{className:"form-control",name:"jenisPembayaran",onChange:this.handleChange,value:this.state.jenisPembayaran},r.a.createElement("option",{value:"cash"},"Cash"),r.a.createElement("option",{value:"kartuKredit"},"Kartu Kredit"),r.a.createElement("option",{value:"voucher"},"Voucher")),r.a.createElement("small",null,"Jenis pembayaran: ",this.state.jenisPembayaran))))),r.a.createElement("h2",null,"Menu Makanan"),r.a.createElement(h,{namaMenu:this.state.menuMakanan[0].nama,hargaMenu:this.state.menuMakanan[0].harga,stock:this.state.menuMakanan[0].stock}),r.a.createElement(h,{namaMenu:this.state.menuMakanan[1].nama,hargaMenu:this.state.menuMakanan[1].harga,stock:this.state.menuMakanan[1].stock}),r.a.createElement("h2",null,"Menu Minuman"),this.state.MenuMinuman.map((function(a,e){return r.a.createElement(g,{key:a.id,namaMenu:a.nama,hargaMenu:a.harga})})))}}]),n}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()})).catch((function(a){console.error(a.message)}))},8:function(a,e,n){a.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.67eee758.chunk.js.map