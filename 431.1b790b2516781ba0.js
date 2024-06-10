"use strict";(self.webpackChunkITSP=self.webpackChunkITSP||[]).push([[431],{2431:(N,v,c)=>{c.r(v),c.d(v,{default:()=>Q});var u=c(6814),p=c(846),t=c(5879);let _=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-main-complaints"]],standalone:!0,features:[t.jDz],decls:1,vars:0,template:function(o,i){1&o&&t._UZ(0,"router-outlet")},dependencies:[u.ez,p.lC]})}return e})();var a=c(6223),x=c(1818),m=c(8733),O=c(8034),M=c(2135),P=c(7728),f=c(9862),b=c(553),Z=c(6996);let h=(()=>{class e{constructor(n,o){this.http=n,this.navService=o,this.complaintsListUrl=`${b.N.url}complaint`,this.replyUrl=`${b.N.url}replay`}initializeNavItems(){this.navService.setNavItems([{name:"\u0639\u0631\u0636 \u062c\u0645\u064a\u0639 \u0627\u0644\u0634\u0643\u0627\u0648\u064a",routerLink:"/dashboard/complaints"}])}GetComplaintsList(n){let o=new f.LE;return n&&Object.keys(n).forEach(i=>{o=o.append(i,n[i])}),this.http.get(this.complaintsListUrl,{params:o})}GetComplaintById(n){return this.http.get(`${this.complaintsListUrl}/${n}`)}UpdateComplaint(n,o,i){const r=`${this.complaintsListUrl}/${n}`;let s=new f.LE;i&&Object.keys(i).forEach(g=>{s=s.append(g,i[g])});const l=new FormData;return Object.keys(o).forEach(g=>{l.append(g,o[g])}),this.http.post(r,l,{params:s})}replyComplaint(n,o){const i=this.replyUrl;let r=new f.LE;o&&Object.keys(o).forEach(l=>{r=r.append(l,o[l])});const s=new FormData;return Object.keys(n).forEach(l=>{s.append(l,n[l])}),this.http.post(i,s,{params:r})}DeleteComplaint(n){return this.http.delete(`${this.complaintsListUrl}/${n}`)}static#t=this.\u0275fac=function(o){return new(o||e)(t.LFG(f.eN),t.LFG(Z.f))};static#n=this.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var y=c(7700),C=c(4286);const F=function(e,d){return[e,d]};function A(e,d){if(1&e&&(t.TgZ(0,"a",28),t.ALo(1,"localize"),t._UZ(2,"i",29),t.qZA()),2&e){const n=t.oxw().$implicit;t.Q6J("routerLink",t.WLB(3,F,t.lcZ(1,1,"/dashboard/complaints/reply"),n.id))}}function T(e,d){1&e&&(t.TgZ(0,"div",30)(1,"p"),t._uU(2,"\u0644\u0627 \u064a\u0648\u062c\u062f \u0628\u064a\u0627\u0646\u0627\u062a"),t.qZA()())}const L=function(e){return{color:e}};function w(e,d){if(1&e){const n=t.EpF();t.TgZ(0,"div",11)(1,"div",12)(2,"div",13)(3,"div",14)(4,"div",15)(5,"a",16),t.NdJ("click",function(){const r=t.CHM(n).$implicit,s=t.oxw();return t.KtG(s.viewComplaint(r))}),t.TgZ(6,"h5",17),t._uU(7),t.qZA()()(),t.TgZ(8,"div",18),t.YNc(9,A,3,6,"a",19),t.TgZ(10,"button",20),t.NdJ("click",function(){const r=t.CHM(n).$implicit,s=t.oxw();return t.KtG(s.deleteComplaint(r.id,r.user.name))}),t._UZ(11,"i",21),t.qZA()()(),t.TgZ(12,"div",1)(13,"div",22),t._UZ(14,"app-truncate-text",23),t.qZA(),t.TgZ(15,"p",24)(16,"span",25),t._uU(17," \u0627\u0644\u062d\u0627\u0644\u0629: "),t.TgZ(18,"span",26),t._uU(19),t.qZA()()()()()(),t.YNc(20,T,3,0,"div",27),t.ALo(21,"filter"),t.qZA()}if(2&e){const n=d.$implicit,o=t.oxw();t.xp6(7),t.hij(" \u0645\u0631\u0633\u0644 \u0627\u0644\u0645\u0642\u062a\u0631\u062d \u0623\u0648 \u0627\u0644\u0634\u0643\u0648\u064a: ",n.user?n.user.name:""," "),t.xp6(2),t.Q6J("ngIf","pending"===n.status||"Unanswered"===n.status),t.xp6(5),t.Q6J("text",n.description)("limit",150),t.xp6(4),t.Q6J("ngStyle",t.VKq(10,L,"pending"===n.status?"red":"initial")),t.xp6(1),t.Oqu(o.getStatusName(n.status)),t.xp6(1),t.Q6J("ngIf",0===t.xi3(21,7,o.complaintsList,o.searchQuery).length&&!o.loading)}}function S(e,d){if(1&e&&(t.TgZ(0,"option",24),t._uU(1),t.qZA()),2&e){const n=d.$implicit;t.Q6J("value",n.status),t.xp6(1),t.hij(" ",n.name," ")}}const I=function(e){return[e]},q=function(e){return[e]},J=function(e){return{color:e}};function z(e,d){if(1&e&&(t.TgZ(0,"div",5)(1,"div",6)(2,"div",7)(3,"div",8)(4,"div",1)(5,"div",9)(6,"a",10),t.ALo(7,"localize"),t._uU(8,"\u0631\u062c\u0648\u0639"),t.qZA()()(),t.TgZ(9,"div",11)(10,"ul")(11,"li")(12,"b"),t._uU(13,"\u0627\u0644\u0648\u0635\u0641:"),t.qZA(),t._UZ(14,"br"),t._uU(15),t.qZA(),t.TgZ(16,"li")(17,"b"),t._uU(18,"\u0627\u0644\u062d\u0627\u0644\u0629:"),t.qZA(),t._UZ(19,"br"),t.TgZ(20,"span",12),t._uU(21),t.qZA()(),t.TgZ(22,"li")(23,"b"),t._uU(24,"\u0627\u0644\u0631\u062f:"),t.qZA(),t._UZ(25,"br"),t._uU(26),t.qZA()()()()()()()),2&e){const n=t.oxw();t.xp6(6),t.Q6J("routerLink",t.VKq(7,q,t.lcZ(7,5,"/dashboard/complaints"))),t.xp6(9),t.hij(" ",n.complaint.description," "),t.xp6(5),t.Q6J("ngStyle",t.VKq(9,J,"pending"===n.complaint.status?"red":"initial")),t.xp6(1),t.hij(" ",n.complaint.status," "),t.xp6(5),t.hij(" ",n.complaint.reply," ")}}function Y(e,d){1&e&&(t.TgZ(0,"div",13)(1,"p"),t._uU(2,"\u0644\u0627 \u064a\u0648\u062c\u062f \u0628\u064a\u0627\u0646\u0627\u062a"),t.qZA()())}const Q=[{path:"",component:_,children:[{path:"",component:(()=>{class e{constructor(n,o,i,r,s){this.router=n,this.localize=o,this.complaintsService=i,this.dialog=r,this._MessagesService=s,this.loading=!1,this.complaintsList=[],this.searchQuery="",this.status=[{name:"\u0645\u0639\u0644\u0642",status:"pending"}]}ngOnInit(){this.getComplaintsList(),this.prepareNavBar()}prepareNavBar(){this.complaintsService.initializeNavItems()}getStatusName(n){const o=this.status.find(i=>i.status===n);return o?o.name:n}getComplaintsList(n=1){this.loading=!0,this.complaintsService.GetComplaintsList({page:n}).subscribe({next:o=>{this.currentPage=o.data.current_page,this.totalPages=o.data.last_page,this.complaintsList=o.data.data,this.loading=!1}})}onPageChange(n){this.getComplaintsList(n)}viewComplaint(n){if(n){const o=this.localize.translateRoute("/dashboard/complaints/view");this.router.navigate([o,n.id])}}deleteComplaint(n,o){this.dialog.open(O.$,{width:"500px",data:{title:"\u062a\u0627\u0643\u064a\u062f \u0627\u0644\u062d\u0630\u0641",message:`\u061f ${o} \u0647\u0644 \u062a\u0631\u064a\u062f \u062d\u0630\u0641  `},panelClass:"confirm-dialog"}).afterClosed().subscribe(r=>{r&&this.complaintsService.DeleteComplaint(n.toString()).subscribe({next:s=>{this.getComplaintsList()},error:s=>{console.error("There was an error deleting the admin!",s)}})})}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(p.F0),t.Y36(m.An),t.Y36(h),t.Y36(y.uw),t.Y36(C.K))};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-complaints-list"]],standalone:!0,features:[t.jDz],decls:14,vars:7,consts:[[1,"container-fluid"],[1,"row"],[1,"col-12","tabs","px-0"],[1,"mb-2","filterForm"],[1,"col-lg-7","mb-lg-2","mb-2"],[1,"input-group"],[1,"btn"],[1,"fa-solid","fa-magnifying-glass"],["type","search","name","search","id","search",1,"form-control",3,"ngModel","ngModelChange"],["class","col-md-6 mb-2",4,"ngFor","ngForOf"],[3,"currentPage","totalPages","pageChange"],[1,"col-md-6","mb-2"],[1,"card","mb-3","border-0"],[1,"card-body"],[1,"row","mb-2"],[1,"col-xl-7","col-md-8","order-md-1","order-2",2,"cursor","pointer"],[1,"text-reset","text-decoration-none",3,"click"],[1,"card-title"],[1,"col-xl-5","col-md-4","order-md-2","order-1","mb-md-0","mb-2","text-end"],["class","btn mx-1 edit",3,"routerLink",4,"ngIf"],[1,"btn","delete",3,"click"],[1,"fa-regular","fa-trash-can"],[1,"card-text",2,"margin-bottom","21px"],[3,"text","limit"],[1,"card-text"],[1,"d-inline-block","px-5","py-2","border"],[3,"ngStyle"],["class","text-center",4,"ngIf"],[1,"btn","mx-1","edit",3,"routerLink"],[1,"fa-regular","fa-comment-dots"],[1,"text-center"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"form",3)(4,"div",1)(5,"div",4)(6,"div",5)(7,"button",6),t._UZ(8,"i",7),t.qZA(),t.TgZ(9,"input",8),t.NdJ("ngModelChange",function(s){return i.searchQuery=s}),t.qZA()()()()(),t.TgZ(10,"div",1),t.YNc(11,w,22,12,"div",9),t.ALo(12,"filter"),t.qZA(),t.TgZ(13,"pagination",10),t.NdJ("pageChange",function(s){return i.onPageChange(s)}),t.qZA()()()()),2&o&&(t.xp6(9),t.Q6J("ngModel",i.searchQuery),t.xp6(2),t.Q6J("ngForOf",t.xi3(12,4,i.complaintsList,i.searchQuery)),t.xp6(2),t.Q6J("currentPage",i.currentPage)("totalPages",i.totalPages))},dependencies:[u.ez,u.sg,u.O5,u.PC,a.u5,a._Y,a.Fj,a.JJ,a.JL,a.On,a.F,p.rH,x.Q,M.u,m.fQ,m.lO,P.H],styles:["a.edit[_ngcontent-%COMP%]{background-color:var(--stroke-color2);color:var(--main)}button.delete[_ngcontent-%COMP%]{background-color:var(--danger);color:#fff}.filterForm[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]{border:1px solid var(--dashboard2);border-radius:8px}.filterForm[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:var(--main)}.filterForm[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, .filterForm[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus-visible, .filterForm[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, .filterForm[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus-visible{box-shadow:none;outline:none}.filterForm[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{color:var(--main)}.filterForm[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder{color:#115a8b86}.filterForm[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border-color:var(--dashboard2);color:var(--dashboard1);background-image:url(chevron-Down.243768823842f8ab.svg);background-size:30px 100%;background-position:left 0px}.card[_ngcontent-%COMP%]{box-shadow:0 3px 6px #0000001a}"]})}return e})()},{path:"reply/:id",component:(()=>{class e{constructor(n,o,i,r,s,l,g){this.localize=n,this.router=o,this.activatedRoute=i,this._MessagesService=r,this.complaintService=s,this.fb=l,this.cdr=g,this.complaintId="",this.status=[{name:"\u0645\u0639\u0644\u0642",status:"pending"},{name:"\u062a\u0645 \u0627\u0644\u0631\u062f",status:"answered"},{name:"\u0644\u0645 \u064a\u062a\u0645 \u0627\u0644\u0631\u062f",status:"Unanswered"}],this.replyForm=this.fb.group({description:["",a.kI.required],status:["",a.kI.required],reply:["",a.kI.required]})}ngOnInit(){this.activatedRoute.paramMap.subscribe(n=>{const o=n.get("id");o&&(this.complaintId=o,this.complaintService.GetComplaintById(o).subscribe(i=>{i&&i.data&&(this.complaintDetails=i.data,console.log(this.complaintDetails),this.setFormValues(i.data))}))})}setFormValues(n){this.replyForm.controls.description.setValue(n.description),this.replyForm.controls.status.setValue(n.status)}navigateToComplaintsList(){const n=this.localize.translateRoute("/dashboard/complaints");this.router.navigate([n])}onSubmit(){this.replyForm.valid&&(this.complaintService.replyComplaint({complaints_id:this.complaintId,message:this.replyForm.controls.description.value}).subscribe(o=>{o&&this.navigateToComplaintsList()}),console.log(this.replyForm.value))}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(m.An),t.Y36(p.F0),t.Y36(p.gz),t.Y36(C.K),t.Y36(h),t.Y36(a.qu),t.Y36(t.sBO))};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-complaint-reply"]],standalone:!0,features:[t.jDz],decls:34,vars:9,consts:[[1,"container-fluid"],[1,"row"],[1,"col-12","tabs"],[1,"col-12","mb-2"],[1,"card","mb-5","border-0"],[1,"card-body"],[1,"row","mb-2"],[1,"col-xl-7","col-md-8","order-md-1","order-2"],[1,"text-reset","text-decoration-none"],[1,"card-title"],[1,"col-xl-5","col-md-4","order-md-2","order-1","mb-md-0","mb-2","text-end"],[1,"btn","px-4","back",3,"routerLink"],[1,"col-12","mb-3"],[1,"form-label"],["readonly","","cols","30","rows","10",1,"form-control"],[3,"formGroup","ngSubmit"],[1,"form-group","col-md-6","col-12","mb-3"],["for","complaintStatus",1,"form-label"],["id","complaintStatus","name","status","formControlName","status",1,"form-select"],[3,"value",4,"ngFor","ngForOf"],[1,"form-group","col-12","mb-3"],["for","complaintAnswer",1,"form-label"],["id","complaintAnswer","cols","30","rows","10","formControlName","reply",1,"form-control"],["type","submit",1,"btn","px-5",3,"disabled"],[3,"value"]],template:function(o,i){if(1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"a",8)(9,"h5",9),t._uU(10," \u0645\u0631\u0633\u0644 \u0627\u0644\u0645\u0642\u062a\u0631\u062d \u0623\u0648 \u0627\u0644\u0634\u0643\u0648\u064a: \u0632\u064a\u0627\u062f \u0639\u0628\u062f\u0627\u0644\u0639\u0638\u064a\u0645 \u0639\u0644\u064a "),t.qZA()()(),t.TgZ(11,"div",10)(12,"a",11),t.ALo(13,"localize"),t._uU(14,"\u0631\u062c\u0648\u0639"),t.qZA()()(),t.TgZ(15,"div",1)(16,"div",12)(17,"label",13),t._uU(18,"\u0627\u0644\u0634\u0643\u0648\u064a \u0627\u0648 \u0627\u0644\u0645\u0642\u062a\u0631\u062c"),t.qZA(),t.TgZ(19,"textarea",14),t._uU(20),t.qZA()(),t.TgZ(21,"form",15),t.NdJ("ngSubmit",function(){return i.onSubmit()}),t.TgZ(22,"div",16)(23,"label",17),t._uU(24,"\u0627\u0644\u062d\u0627\u0644\u0629"),t.qZA(),t.TgZ(25,"select",18),t.YNc(26,S,2,2,"option",19),t.qZA()(),t.TgZ(27,"div",20)(28,"label",21),t._uU(29,"\u0627\u0644\u0631\u062f"),t.qZA(),t._UZ(30,"textarea",22),t.qZA(),t.TgZ(31,"div",20)(32,"button",23),t._uU(33," \u062d\u0641\u0638 "),t.qZA()()()()()()()()()()),2&o){let r;t.xp6(12),t.Q6J("routerLink",t.VKq(7,I,t.lcZ(13,5,"/dashboard/complaints"))),t.xp6(8),t.hij("                  ",i.complaintDetails?i.complaintDetails.description:"","\n                            "),t.xp6(1),t.Q6J("formGroup",i.replyForm),t.xp6(5),t.Q6J("ngForOf",i.status),t.xp6(6),t.Q6J("disabled",!(null!=(r=i.replyForm.get("reply"))&&r.value))}},dependencies:[u.ez,u.sg,a.u5,a._Y,a.YN,a.Kr,a.Fj,a.EJ,a.JJ,a.JL,p.rH,m.fQ,m.lO,a.UX,a.sg,a.u],styles:[".card[_ngcontent-%COMP%]{box-shadow:0 4px 4px #00000040}.card[_ngcontent-%COMP%]   a.back[_ngcontent-%COMP%]{border:1px solid var(--main);border-radius:10px;color:var(--main)}.card[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%]{border-color:var(--main);color:#115a8b}.card[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%]:focus, .card[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%]:focus-visible{box-shadow:none;outline:none}.card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%]{color:var(--dashboard1)}.card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus-visible, .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus, .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus-visible{box-shadow:none;outline:none}.card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea.form-control[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{border-color:var(--main);color:#115a8b}.card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]::placeholder{color:#115a8b86}.card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border-color:var(--main);color:var(--dashboard1);background-image:url(chevron-Down.243768823842f8ab.svg);background-size:30px 100%;background-position:left 0px}.card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:var(--main);color:#fff}.card[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-scrollbar{width:8px;padding:3px}.card[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-scrollbar-track{margin-top:3px;margin-bottom:3px;border-radius:20px;background-color:#3182ce8c}.card[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#115a8b;border-radius:20px}"]})}return e})()},{path:"view/:id",component:(()=>{class e{constructor(n,o,i,r,s,l){this.complaintsService=n,this.localize=o,this.router=i,this.activatedRoute=r,this._MessagesService=s,this.fb=l,this.isEditMode=!1,this.complaintId="",this.complaintForm=this.fb.group({description:["",a.kI.required],status:["",a.kI.required],reply:["",a.kI.required]})}ngOnInit(){this.activatedRoute.paramMap.subscribe(n=>{const o=n.get("id");o&&(this.complaintId=o,this.isEditMode=!0,this.complaintsService.GetComplaintById(o).subscribe(i=>{i&&i.data&&(this.complaint=i.data,this.setFormValues(i.data))}))})}setFormValues(n){this.complaintForm.patchValue({description:n.description,status:n.status,reply:n.reply})}get f(){return this.complaintForm.controls}navigateToComplaintsList(){const n=this.localize.translateRoute("/dashboard/complaints");this.router.navigate([n])}updateComplaint(){this.complaintForm.valid&&this.complaintsService.UpdateComplaint(this.complaintId,{description:this.complaintForm.controls.description.value,status:this.complaintForm.controls.status.value,reply:this.complaintForm.controls.reply.value,_method:"PATCH"}).subscribe({next:o=>{this._MessagesService.showSuccessMessage("\u062a\u0645 \u062a\u062d\u062f\u064a\u062b \u0627\u0644\u0634\u0643\u0648\u064a",3e3),this.navigateToComplaintsList()},error:o=>{console.error("Failed to edit complaint:",o)}})}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(h),t.Y36(m.An),t.Y36(p.F0),t.Y36(p.gz),t.Y36(C.K),t.Y36(a.qu))};static#n=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-view-complaint"]],standalone:!0,features:[t.jDz],decls:5,vars:2,consts:[[1,"container-fluid"],[1,"row"],[1,"col-12","tabs","px-0"],["class","card mb-3 border-0",4,"ngIf"],["class","text-center",4,"ngIf"],[1,"card","mb-3","border-0"],[1,"row","g-0","align-items-center"],[1,"col-md-12","mb-2"],[1,"card-body"],[1,"col-12","mb-3","text-end"],[1,"btn","px-4","back",3,"routerLink"],[1,"list-items"],[3,"ngStyle"],[1,"text-center"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t.YNc(3,z,27,11,"div",3),t.YNc(4,Y,3,0,"div",4),t.qZA()()()),2&o&&(t.xp6(3),t.Q6J("ngIf",i.complaint),t.xp6(1),t.Q6J("ngIf",!i.complaint))},dependencies:[u.ez,u.O5,u.PC,a.u5,p.Bz,p.rH,m.fQ,m.lO],styles:[".card[_ngcontent-%COMP%]{box-shadow:0 4px 4px #00000040}.card[_ngcontent-%COMP%]   .list-items[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{margin-bottom:20px}.card[_ngcontent-%COMP%]   a.back[_ngcontent-%COMP%]{border:1px solid var(--main);border-radius:10px;color:var(--main)}"]})}return e})()}]}]}}]);