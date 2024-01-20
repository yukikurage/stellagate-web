(()=>{function l(){throw new Error("Failed pattern match")}var me=t=>t;var v=(t,e)=>({tag:t,_1:e}),E=v("Nothing"),G=t=>v("Just",t);var Z=(t,e)=>({tag:t,_1:e}),Kt=t=>Z("Left",t),Yt=t=>Z("Right",t);var Zt={map:t=>e=>t(e)};var Tn=function(t){return function(){return t}},Mn=function(t){return function(e){return function(){return e(t())()}}},Nn=function(t){return function(){for(;!t(););}};var Lt={Applicative0:()=>kt,Bind1:()=>Ue},Ue={bind:Mn,Apply0:()=>En},En={apply:t=>e=>()=>{let n=t(),r=e();return kt.pure(n(r))()},Functor0:()=>Kr},kt={pure:Tn,Apply0:()=>En},Kr={map:t=>e=>()=>{let n=e();return t(n)}};var tt=(t,e)=>({tag:t,_1:e}),ye=t=>tt("Loop",t),_e=t=>tt("Done",t);var be={tailRecM:t=>e=>{let n=t(e);return()=>{let a=n();Nn(()=>{let s=a;if(s.tag==="Loop")return a=t(s._1)(),!1;if(s.tag==="Done")return!0;l()})();let o=a;if(o.tag==="Done")return o._1;l()}},Monad0:()=>Lt};var Rn=function(t){return function(e){return function(n){for(var r=e,a=n.length,o=a-1;o>=0;o--)r=t(n[o])(r);return r}}},An=function(t){return function(e){return function(n){for(var r=e,a=n.length,o=0;o<a;o++)r=t(r)(n[o]);return r}}};var te=t=>{let e=t.Apply0();return n=>r=>n.foldr(a=>{let o=r(a);return s=>e.apply(e.Functor0().map(i=>me)(o))(s)})(t.pure())};var He={foldr:t=>e=>n=>{if(n.tag==="Nothing")return e;if(n.tag==="Just")return t(n._1)(e);l()},foldl:t=>e=>n=>{if(n.tag==="Nothing")return e;if(n.tag==="Just")return t(e)(n._1);l()},foldMap:t=>{let e=t.mempty;return n=>r=>{if(r.tag==="Nothing")return e;if(r.tag==="Just")return n(r._1);l()}}};var Rt={foldr:Rn,foldl:An,foldMap:t=>{let e=t.mempty;return n=>Rt.foldr(r=>a=>t.Semigroup0().append(n(r))(a))(e)}};var x=(t,e)=>({tag:"Tuple",_1:t,_2:e}),De=t=>e=>x(t,e);var ut=(t,e,n)=>({tag:t,_1:e,_2:n});var At=ut("Nil");var wn=(e=>n=>{let r=e,a=n,o=!0,s;for(;o;){let i=r,u=a;if(u.tag==="Nil"){o=!1,s=i;continue}if(u.tag==="Cons"){r=ut("Cons",u._1,i),a=u._2;continue}l()}return s})(At);var et=function(t){return t};var qt=(t,e)=>({tag:"CatQueue",_1:t,_2:e});var xn=t=>{let e=t,n=!0,r;for(;n;){let a=e;if(a._1.tag==="Nil"){if(a._2.tag==="Nil"){n=!1,r=E;continue}e=qt(wn(a._2),At);continue}if(a._1.tag==="Cons"){n=!1,r=v("Just",x(a._1._1,qt(a._1._2,a._2)));continue}l()}return r};var ne=(t,e,n)=>({tag:t,_1:e,_2:n}),gt=ne("CatNil");var No=t=>e=>{if(t.tag==="CatNil")return e;if(e.tag==="CatNil")return t;if(t.tag==="CatCons")return ne("CatCons",t._1,qt(t._2._1,ut("Cons",e,t._2._2)));l()},Eo=t=>e=>n=>{let r=o=>s=>i=>{let u=o,f=s,m=i,D=!0,q;for(;D;){let C=u,$=f,I=m;if(I.tag==="Nil"){D=!1,q=$;continue}if(I.tag==="Cons"){u=C,f=C($)(I._1),m=I._2;continue}l()}return q};return(o=>s=>{let i=o,u=s,f=!0,m;for(;f;){let D=i,q=u,C=xn(D);if(C.tag==="Nothing"){f=!1,m=r($=>I=>I($))(e)(q);continue}if(C.tag==="Just"){i=C._1._2,u=ut("Cons",t(C._1._1),q);continue}l()}return m})(n)(At)},In=t=>{if(t.tag==="CatNil")return E;if(t.tag==="CatCons")return v("Just",x(t._1,t._2._1.tag==="Nil"&&t._2._2.tag==="Nil"?gt:Eo(No)(gt)(t._2)));l()};var Dt=(t,e)=>({tag:"Free",_1:t,_2:e}),Ct=(t,e,n)=>({tag:t,_1:e,_2:n});var Fo=t=>{let e=t,n=!0,r;for(;n;){let a=e;if(a._1.tag==="Return"){let o=In(a._2);if(o.tag==="Nothing"){n=!1,r=Ct("Return",a._1._1);continue}if(o.tag==="Just"){e=(()=>{let s=o._1._1(a._1._1);return Dt(s._1,(()=>{if(s._2.tag==="CatNil")return o._1._2;if(o._1._2.tag==="CatNil")return s._2;if(s._2.tag==="CatCons")return ne("CatCons",s._2._1,qt(s._2._2._1,ut("Cons",o._1._2,s._2._2._2)));l()})())})();continue}l()}if(a._1.tag==="Bind"){n=!1,r=Ct("Bind",a._1._1,o=>{let s=a._1._2(o);return Dt(s._1,(()=>{if(s._2.tag==="CatNil")return a._2;if(a._2.tag==="CatNil")return s._2;if(s._2.tag==="CatCons")return ne("CatCons",s._2._1,qt(s._2._2._1,ut("Cons",a._2,s._2._2._2)));l()})())});continue}l()}return r};var Ce=t=>{let e=t.Monad0(),n=e.Bind1().Apply0().Functor0();return r=>t.tailRecM(a=>{let o=Fo(a);if(o.tag==="Return")return n.map(_e)(e.Applicative0().pure(o._1));if(o.tag==="Bind")return n.map(s=>tt("Loop",o._2(s)))(r(o._1));l()})};var he=function(t){throw new Error(t)};var wt=function(){var t={},e="Pure",n="Throw",r="Catch",a="Sync",o="Async",s="Bind",i="Bracket",u="Fork",f="Sequential",m="Map",D="Apply",q="Alt",C="Cons",$="Resume",I="Release",Q="Finalizer",P="Finalized",H="Forked",V="Fiber",z="Thunk";function d(p,F,B,A){this.tag=p,this._1=F,this._2=B,this._3=A}function J(p){var F=function(B,A,g){return new d(p,B,A,g)};return F.tag=p,F}function K(p){return new d(e,void 0)}function Mt(p){try{p()}catch(F){setTimeout(function(){throw F},0)}}function qr(p,F,B){try{return F(B())}catch(A){return p(A)}}function wr(p,F,B){try{return F(B)()}catch(A){return B(p(A))(),K}}var le=function(){var p=1024,F=0,B=0,A=new Array(p),g=!1;function c(){var R;for(g=!0;F!==0;)F--,R=A[B],A[B]=void 0,B=(B+1)%p,R();g=!1}return{isDraining:function(){return g},enqueue:function(R){var h,W;F===p&&(W=g,c(),g=W),A[(B+F)%p]=R,F++,g||c()}}}();function xr(p){var F={},B=0,A=0;return{register:function(g){var c=B++;g.onComplete({rethrow:!0,handler:function(R){return function(){A--,delete F[c]}}})(),F[c]=g,A++},isEmpty:function(){return A===0},killAll:function(g,c){return function(){if(A===0)return c();var R=0,h={};function W(w){h[w]=F[w].kill(g,function(O){return function(){delete h[w],R--,p.isLeft(O)&&p.fromLeft(O)&&setTimeout(function(){throw p.fromLeft(O)},0),R===0&&c()}})()}for(var j in F)F.hasOwnProperty(j)&&(R++,W(j));return F={},B=0,A=0,function(w){return new d(a,function(){for(var O in h)h.hasOwnProperty(O)&&h[O]()})}}}}}var Wt=0,X=1,pe=2,fe=3,$e=4,nt=5,Gt=6;function ve(p,F,B){var A=0,g=Wt,c=B,R=null,h=null,W=null,j=null,w=null,O=0,Nt=0,ot=null,yt=!0;function _t(y){for(var _,M,L;;)switch(_=null,M=null,L=null,g){case pe:g=X;try{c=W(c),j===null?W=null:(W=j._1,j=j._2)}catch(Y){g=nt,R=p.left(Y),c=null}break;case fe:p.isLeft(c)?(g=nt,R=c,c=null):W===null?g=nt:(g=pe,c=p.fromRight(c));break;case X:switch(c.tag){case s:W&&(j=new d(C,W,j)),W=c._2,g=X,c=c._1;break;case e:W===null?(g=nt,c=p.right(c._1)):(g=pe,c=c._1);break;case a:g=fe,c=qr(p.left,p.right,c._1);break;case o:g=$e,c=wr(p.left,c._1,function(Y){return function(){A===y&&(A++,le.enqueue(function(){A===y+1&&(g=fe,c=Y,_t(A))}))}});return;case n:g=nt,R=p.left(c._1),c=null;break;case r:W===null?w=new d(C,c,w,h):w=new d(C,c,new d(C,new d($,W,j),w,h),h),W=null,j=null,g=X,c=c._1;break;case i:O++,W===null?w=new d(C,c,w,h):w=new d(C,c,new d(C,new d($,W,j),w,h),h),W=null,j=null,g=X,c=c._1;break;case u:g=fe,_=ve(p,F,c._2),F&&F.register(_),c._1&&_.run(),c=p.right(_);break;case f:g=X,c=Ir(p,F,c._1);break}break;case nt:if(W=null,j=null,w===null)g=Gt,c=h||R||c;else switch(_=w._3,L=w._1,w=w._2,L.tag){case r:h&&h!==_&&O===0?g=nt:R&&(g=X,c=L._2(p.fromLeft(R)),R=null);break;case $:h&&h!==_&&O===0||R?g=nt:(W=L._1,j=L._2,g=pe,c=p.fromRight(c));break;case i:O--,R===null&&(M=p.fromRight(c),w=new d(C,new d(I,L._2,M),w,_),(h===_||O>0)&&(g=X,c=L._3(M)));break;case I:w=new d(C,new d(P,c,R),w,h),g=X,h&&h!==_&&O===0?c=L._1.killed(p.fromLeft(h))(L._2):R?c=L._1.failed(p.fromLeft(R))(L._2):c=L._1.completed(p.fromRight(c))(L._2),R=null,O++;break;case Q:O++,w=new d(C,new d(P,c,R),w,h),g=X,c=L._1;break;case P:O--,g=nt,c=L._1,R=L._2;break}break;case Gt:for(var U in ot)ot.hasOwnProperty(U)&&(yt=yt&&ot[U].rethrow,Mt(ot[U].handler(c)));ot=null,h&&R?setTimeout(function(){throw p.fromLeft(R)},0):p.isLeft(c)&&yt&&setTimeout(function(){if(yt)throw p.fromLeft(c)},0);return;case Wt:g=X;break;case $e:return}}function k(y){return function(){if(g===Gt)return yt=yt&&y.rethrow,y.handler(c)(),function(){};var _=Nt++;return ot=ot||{},ot[_]=y,function(){ot!==null&&delete ot[_]}}}function b(y,_){return function(){if(g===Gt)return _(p.right(void 0))(),function(){};var M=k({rethrow:!1,handler:function(){return _(p.right(void 0))}})();switch(g){case Wt:h=p.left(y),g=Gt,c=h,_t(A);break;case $e:h===null&&(h=p.left(y)),O===0&&(g===$e&&(w=new d(C,new d(Q,c(y)),w,h)),g=nt,c=null,R=null,_t(++A));break;default:h===null&&(h=p.left(y)),O===0&&(g=nt,c=null,R=null)}return M}}function T(y){return function(){var _=k({rethrow:!1,handler:y})();return g===Wt&&_t(A),_}}return{kill:b,join:T,onComplete:k,isSuspended:function(){return g===Wt},run:function(){g===Wt&&(le.isDraining()?_t(A):le.enqueue(function(){_t(A)}))}}}function Sr(p,F,B,A){var g=0,c={},R=0,h={},W=new Error("[ParAff] Early exit"),j=null,w=t;function O(k,b,T){var y=b,_=null,M=null,L=0,U={},Y,zt;t:for(;;)switch(Y=null,y.tag){case H:if(y._3===t&&(Y=c[y._1],U[L++]=Y.kill(k,function(Pr){return function(){L--,L===0&&T(Pr)()}})),_===null)break t;y=_._2,M===null?_=null:(_=M._1,M=M._2);break;case m:y=y._2;break;case D:case q:_&&(M=new d(C,_,M)),_=y,y=y._1;break}if(L===0)T(p.right(void 0))();else for(zt=0,Y=L;zt<Y;zt++)U[zt]=U[zt]();return U}function Nt(k,b,T){var y,_,M,L,U,Y;for(p.isLeft(k)?(y=k,_=null):(_=k,y=null);;){if(M=null,L=null,U=null,Y=null,j!==null)return;if(b===null){A(y||_)();return}if(b._3!==t)return;switch(b.tag){case m:y===null?(b._3=p.right(b._1(p.fromRight(_))),_=b._3):b._3=y;break;case D:if(M=b._1._3,L=b._2._3,y){if(b._3=y,U=!0,Y=R++,h[Y]=O(W,y===M?b._2:b._1,function(){return function(){delete h[Y],U?U=!1:T===null?Nt(y,null,null):Nt(y,T._1,T._2)}}),U){U=!1;return}}else{if(M===t||L===t)return;_=p.right(p.fromRight(M)(p.fromRight(L))),b._3=_}break;case q:if(M=b._1._3,L=b._2._3,M===t&&p.isLeft(L)||L===t&&p.isLeft(M))return;if(M!==t&&p.isLeft(M)&&L!==t&&p.isLeft(L))y=_===M?L:M,_=null,b._3=y;else if(b._3=_,U=!0,Y=R++,h[Y]=O(W,_===M?b._2:b._1,function(){return function(){delete h[Y],U?U=!1:T===null?Nt(_,null,null):Nt(_,T._1,T._2)}}),U){U=!1;return}break}T===null?b=null:(b=T._1,T=T._2)}}function ot(k){return function(b){return function(){delete c[k._1],k._3=b,Nt(b,k._2._1,k._2._2)}}}function yt(){var k=X,b=B,T=null,y=null,_,M;t:for(;;)switch(_=null,M=null,k){case X:switch(b.tag){case m:T&&(y=new d(C,T,y)),T=new d(m,b._1,t,t),b=b._2;break;case D:T&&(y=new d(C,T,y)),T=new d(D,t,b._2,t),b=b._1;break;case q:T&&(y=new d(C,T,y)),T=new d(q,t,b._2,t),b=b._1;break;default:M=g++,k=nt,_=b,b=new d(H,M,new d(C,T,y),t),_=ve(p,F,_),_.onComplete({rethrow:!1,handler:ot(b)})(),c[M]=_,F&&F.register(_)}break;case nt:if(T===null)break t;T._1===t?(T._1=b,k=X,b=T._2,T._2=t):(T._2=b,b=T,y===null?T=null:(T=y._1,y=y._2))}for(w=b,M=0;M<g;M++)c[M].run()}function _t(k,b){j=p.left(k);var T;for(var y in h)if(h.hasOwnProperty(y)){T=h[y];for(y in T)T.hasOwnProperty(y)&&T[y]()}h=null;var _=O(k,w,b);return function(M){return new d(o,function(L){return function(){for(var U in _)_.hasOwnProperty(U)&&_[U]();return K}})}}return yt(),function(k){return new d(o,function(b){return function(){return _t(k,b)}})}}function Ir(p,F,B){return new d(o,function(A){return function(){return Sr(p,F,B,A)}})}return d.EMPTY=t,d.Pure=J(e),d.Throw=J(n),d.Catch=J(r),d.Sync=J(a),d.Async=J(o),d.Bind=J(s),d.Bracket=J(i),d.Fork=J(u),d.Seq=J(f),d.ParMap=J(m),d.ParApply=J(D),d.ParAlt=J(q),d.Fiber=ve,d.Supervisor=xr,d.Scheduler=le,d.nonCanceler=K,d}(),re=wt.Pure,Io=wt.Throw;function xt(t){return function(e){return wt.Bind(t,e)}}var St=wt.Sync;var Ge=wt.Async;function Te(t,e){return function(){return wt.Fiber(t,null,e)}}var Po=wt.Seq;var ze={isLeft:t=>{if(t.tag==="Left")return!0;if(t.tag==="Right")return!1;l()},fromLeft:t=>{if(t.tag==="Left")return t._1;if(t.tag==="Right")return he("unsafeFromLeft: Right");l()},fromRight:t=>{if(t.tag==="Right")return t._1;if(t.tag==="Left")return he("unsafeFromRight: Left");l()},left:Kt,right:Yt};var vn=(()=>{let t=re();return e=>t})();function rt(t,e,n){return t==null?e:n(t)}var Ne=function(t){return function(e){return function(){return e[t]}}},Ku=Ne("children"),Bo=Ne("firstElementChild"),ko=Ne("lastElementChild"),Yu=Ne("childElementCount");function Ee(t){return function(){return function(e){return t(e)()}}}function Le(t){return function(e){return function(n){return function(r){return function(){return r.addEventListener(t,e,n)}}}}}function Fe(t){return function(e){return function(n){return function(r){return function(){return r.removeEventListener(t,e,n)}}}}}var Ut=function(){return window};var Ze=t=>t,Xe=Ze("Loading"),Oo=Ze("Interactive"),Qo=Ze("Complete");var Un=t=>t==="loading"?v("Just",Xe):t==="interactive"?v("Just",Oo):t==="complete"?v("Just",Qo):E;function On(t,e,n,r){if(typeof window<"u"){var a=window[n];if(a!=null&&r instanceof a)return e(r)}for(var o=r;o!=null;){var s=Object.getPrototypeOf(o),i=s.constructor.name;if(i===n)return e(r);if(i==="Object")return t;o=s}return t}var ct=t=>e=>On(E,G,t,e);function tn(t){return t.body}function Qn(t){return t.readyState}var Hn=t=>()=>{let e=Qn(t),n=Un(e);if(n.tag==="Nothing")return Xe;if(n.tag==="Just")return n._1;l()};function oe(t){return function(){return t.document}}var Go=Ge(t=>()=>{let e=Ut(),n=Ut(),r=oe(n)();if(Hn(r)()==="Loading"){let o=Ee((()=>{let i=t(Z("Right",void 0));return u=>i})())();Le("DOMContentLoaded")(o)(!1)(e)();let s=St(Fe("DOMContentLoaded")(o)(!1)(e));return i=>s}return t(Z("Right",void 0))(),vn});var Gn=xt(Go)(()=>xt(St(()=>{let t=Ut(),e=oe(t)(),n=tn(e);return rt(n,E,G)}))(t=>re(t.tag==="Just"?v("Just",t._1):E)));var en=(t,e,n,r,a,o)=>({tag:t,_1:e,_2:n,_3:r,_4:a,_5:o});var zn=t=>Dt(Ct("Bind",en("ComponentTextSig",{run:e=>e(t),get:()=>t},void 0),e=>Dt(Ct("Return",e),gt)),gt);var Qt=t=>{let e=t.Apply0(),n=e.Functor0(),r=(()=>{let a={map:o=>{let s=n.map(o);return i=>u=>s(i(u))}};return{apply:o=>s=>i=>e.apply(o(i))(s(i)),Functor0:()=>a}})();return{bind:a=>o=>s=>t.bind(a(s))(i=>o(i)(s)),Apply0:()=>r}};var ae=t=>{let e=t.Applicative0(),n=e.Apply0(),r=(()=>{let o=n.Functor0(),s={map:u=>{let f=o.map(u);return m=>D=>f(m(D))}},i={apply:u=>f=>m=>n.apply(u(m))(f(m)),Functor0:()=>s};return{pure:u=>{let f=e.pure(u);return m=>f},Apply0:()=>i}})(),a=Qt(t.Bind1());return{Applicative0:()=>r,Bind1:()=>a}};var se=t=>{let e=ae(t.Monad0());return{liftEffect:n=>{let r=t.liftEffect(n);return a=>r},Monad0:()=>e}},nn=t=>{let e=t.Monad0(),n=e.Bind1(),r=e.Applicative0().pure,a=ae(e);return{tailRecM:o=>s=>i=>t.tailRecM(u=>n.bind(o(u)(i))(r))(s),Monad0:()=>a}};var rn=t=>{let e=t.Semigroup0(),n=ae(t.Monad1());return{tell:r=>{let a=t.tell(r);return o=>a},Semigroup0:()=>e,Monad1:()=>n}};var It=t=>e=>{let n=e.Apply0(),r=n.Functor0(),a={map:s=>r.map(i=>x(s(i._1),i._2))},o={apply:s=>i=>n.apply(r.map(u=>f=>x(u._1(f._1),t.append(u._2)(f._2)))(s))(i),Functor0:()=>a};return{bind:s=>i=>e.bind(s)(u=>{let f=u._2;return n.Functor0().map(m=>x(m._1,t.append(f)(m._2)))(i(u._1))}),Apply0:()=>o}};var Ht=t=>{let e=t.mempty,n=t.Semigroup0();return r=>{let a=r.Apply0(),o=a.Functor0(),s=(()=>{let i={map:u=>o.map(f=>x(u(f._1),f._2))};return{apply:u=>f=>a.apply(o.map(m=>D=>x(m._1(D._1),n.append(m._2)(D._2)))(u))(f),Functor0:()=>i}})();return{pure:i=>r.pure(x(i,e)),Apply0:()=>s}}},Vt=t=>{let e=Ht(t),n=It(t.Semigroup0());return r=>{let a=e(r.Applicative0()),o=n(r.Bind1());return{Applicative0:()=>a,Bind1:()=>o}}};var ie=t=>{let e=t.mempty,n=Vt(t);return r=>{let a=r.Monad0(),o=n(a);return{liftEffect:s=>a.Bind1().bind(r.liftEffect(s))(i=>a.Applicative0().pure(x(i,e))),Monad0:()=>o}}},Re=t=>{let e=t.Semigroup0(),n=t.mempty,r=Vt(t);return a=>{let o=a.Monad0(),s=r(o);return{tailRecM:i=>u=>a.tailRecM(f=>{let m=f._2;return o.Bind1().bind(i(f._1))(D=>o.Applicative0().pure((()=>{if(D._1.tag==="Loop")return tt("Loop",x(D._1._1,e.append(m)(D._2)));if(D._1.tag==="Done")return tt("Done",x(D._1._1,e.append(m)(D._2)));l()})()))})(x(u,n)),Monad0:()=>s}}};var ue=t=>{let e=t.Semigroup0(),n=Vt(t);return r=>{let a=n(r);return{tell:(()=>{let o=De();return s=>r.Applicative0().pure(o(s))})(),Semigroup0:()=>e,Monad1:()=>a}}};var Zn={liftEffect:t=>t,Monad0:()=>Lt};var on=t=>()=>({subscriptions:new Set,value:t}),Ae=t=>e=>()=>{t.value=e(t.value),t.subscriptions.forEach(n=>{n.cleaner(),n.cleaner=n.callback(t.value)()})},an=t=>()=>t.value,sn=t=>e=>()=>{let n={callback:e,cleaner:e(t.value)()};return t.subscriptions.add(n),()=>{n.cleaner(),t.subscriptions.delete(n)}};var ce=t=>{let e=t.Semigroup0(),n={append:r=>a=>{let o=r.get,s=a.get;return{run:i=>r.run(u=>{let f=e.append(u);return a.run(m=>i(f(m)))}),get:()=>{let i=o(),u=s();return e.append(i)(u)}}}};return{mempty:(()=>{let r=t.mempty;return{run:a=>a(r),get:()=>r}})(),Semigroup0:()=>n}};var Xn=t=>{let e=t.Monad0();return n=>e.Bind1().bind(t.liftEffect(on(n)))(r=>e.Applicative0().pure(x({run:sn(r),get:an(r)},r)))};var tr=t=>{let e=t.Monad0(),n=e.Bind1();return r=>n.bind(t.liftEffect(on()))(a=>n.bind(t.liftEffect(r.run(o=>()=>{let s=o(),i=s._1;return Ae(a)(u=>i)(),s._2})))(o=>e.Applicative0().pure(x({run:sn(a),get:an(a)},o))))};var de=(()=>{let t={append:e=>n=>()=>{e(),n()}};return{mempty:()=>{},Semigroup0:()=>t}})(),ra={append:t=>e=>()=>{t(),e()}},er=ue(de)(Lt).tell;var rr=Re(de)(be);var or=ie(de)(Zn),oa=tr(or);var nr=It(ra)(Ue);var aa=Ht(de)(kt);var ar=t=>{let e=t.MonadEffect0(),n=e.Monad0().Bind1(),r=t.MonadEffect0().Monad0().Bind1().Apply0().Functor0().map(a=>{});return a=>n.bind(e.liftEffect(()=>({value:!0})))(o=>{let s=i=>n.bind(e.liftEffect(()=>o.value))(u=>u?e.liftEffect(()=>(o.value=!1,de.mempty())):i);return r(t.useHooks((()=>{let i=a.get;return{run:u=>a.run(f=>u(s(f))),get:()=>{let u=i();return s(u)}}})()))})};var sa=t=>{let e=t.MonadEffect0(),n=e.Monad0(),r=n.Bind1(),a=Xn(e),o=n.Applicative0(),s=r.Apply0(),i=t.MonadEffect0().Monad0().Bind1().Apply0().Functor0().map(u=>{});return u=>f=>r.bind(a(o.pure()))(m=>{let D=m._2,q=m._1;return r.bind(e.liftEffect(u(C=>{let $=s.apply(s.Functor0().map(I=>me)(f(C)))(o.pure());return Ae(D)(I=>$)})))(C=>r.bind(t.useCleaner(C))(()=>i(t.useHooks(q))))})},sr=t=>{let e=sa(t);return n=>r=>a=>e(o=>{let s=Ee(o);return()=>{let i=s();return Le(r)(i)(!1)(n)(),Fe(r)(i)(!1)(n)}})(a)};var ir=t=>{let e=t.MonadEffect0(),n=e.Monad0(),r=n.Applicative0().pure,a=se(e);return{useCleaner:o=>{let s=t.useCleaner(o);return i=>s},useHooks:o=>Qt(n.Bind1()).bind(r)(s=>{let i=t.useHooks((()=>{let u=o.get;return{run:f=>o.run(m=>f(m(s))),get:()=>u()(s)}})());return u=>i}),MonadEffect0:()=>a}},ur=t=>{let e=t.MonadEffect0(),n=e.Monad0(),r=n.Bind1(),a=n.Applicative0();return o=>{let s=ce(o),i=s.mempty,u=D=>n.Bind1().bind(D)(q=>n.Applicative0().pure(x(q,i))),f=It((()=>{let D=o.Semigroup0();return{append:q=>C=>{let $=q.get,I=C.get;return{run:Q=>q.run(P=>{let H=D.append(P);return C.run(V=>Q(H(V)))}),get:()=>{let Q=$(),P=I();return D.append(Q)(P)}}}}})())(r),m=ie(s)(e);return{useCleaner:D=>u(t.useCleaner(D)),useHooks:D=>f.bind(u(t.useHooks((()=>{let q=D.get;return{run:C=>D.run($=>C($)),get:()=>q()}})())))(q=>f.bind(ue(s)(n).tell((()=>{let C=q.get;return{run:$=>q.run(I=>I._2.run($)),get:()=>C()._2.get()}})()))(()=>Ht(s)(a).pure((()=>{let C=q.get;return{run:$=>q.run(I=>$(I._1)),get:()=>C()._1}})()))),MonadEffect0:()=>m}}};var cr={useCleaner:t=>er(t),useHooks:t=>nr.bind(oa((()=>{let e=t.get;return{run:n=>t.run(r=>n(r)),get:()=>e()}})()))(e=>{let n=e._1;return nr.bind(er(e._2))(()=>aa.pure(n))}),MonadEffect0:()=>or};var qe=(t,e)=>({tag:"Bound",_1:t,_2:e}),Pt=(t,e)=>({tag:t,_1:e});var lr=t=>({lift:e=>n=>Pt("FreeT",r=>e.Bind1().Apply0().Functor0().map(Kt)(n))});var cn=t=>e=>({map:n=>r=>{if(r.tag==="FreeT")return Pt("FreeT",a=>e.map((()=>{let o=t.map(cn(t)(e).map(n));return s=>{if(s.tag==="Left")return Z("Left",n(s._1));if(s.tag==="Right")return Z("Right",o(s._1));l()}})())(r._1()));if(r.tag==="Bind")return Pt("Bind",qe(r._1._1,(()=>{let a=cn(t)(e).map(n);return o=>a(r._1._2(o))})()));l()}});var we=t=>e=>({bind:n=>r=>n.tag==="Bind"?Pt("Bind",qe(n._1._1,a=>Pt("Bind",qe(o=>n._1._2(a),r)))):Pt("Bind",qe(a=>n,r)),Apply0:()=>pr(t)(e)}),pr=t=>e=>{let n=cn(t)(e.Bind1().Apply0().Functor0());return{apply:(()=>{let r=we(t)(e);return a=>o=>r.bind(a)(s=>r.bind(o)(i=>dn(t)(e).pure(s(i))))})(),Functor0:()=>n}},dn=t=>e=>({pure:n=>Pt("FreeT",r=>e.Applicative0().pure(Z("Left",n))),Apply0:()=>pr(t)(e)});var ia=t=>e=>{let n=e.Monad0(),r=n.Bind1(),a=n.Applicative0(),o=we(t)(n);return e.tailRecM(s=>{if(s.tag==="FreeT")return r.Apply0().Functor0().map(_e)(s._1());if(s.tag==="Bind"){let i=s._1._1();if(i.tag==="FreeT")return r.bind(i._1())(u=>{if(u.tag==="Left")return a.pure(tt("Loop",s._1._2(u._1)));if(u.tag==="Right")return a.pure(tt("Done",Z("Right",t.map(f=>o.bind(f)(s._1._2))(u._1))));l()});if(i.tag==="Bind")return a.pure(tt("Loop",o.bind(i._1._1())(u=>o.bind(i._1._2(u))(s._1._2))))}l()})},fr=t=>e=>{let n=e.Monad0(),r=n.Bind1(),a=ia(t)(e);return o=>e.tailRecM(s=>r.bind(a(s))(i=>{if(i.tag==="Left")return n.Applicative0().pure(tt("Done",i._1));if(i.tag==="Right")return r.Apply0().Functor0().map(ye)(o(i._1));l()}))};var $r=t=>e=>{let n={Applicative0:()=>dn(t)(e),Bind1:()=>we(t)(e)};return{tailRecM:r=>{let a=o=>we(t)(e).bind(r(o))(s=>{if(s.tag==="Loop")return a(s._1);if(s.tag==="Done")return dn(t)(e).pure(s._1);l()});return a},Monad0:()=>n}};var ca=lr(Zt).lift,da=t=>{let e=t.Monad0(),n=$r(Zt)(e),r=ca(e);return a=>{let o=fr(Zt)(t)(s=>t.Monad0().Applicative0().pure(s));return o(a(n)(r)(o))}},ln=t=>e=>{let n=da(e);return r=>a=>n(o=>{let s=te(o.Monad0().Applicative0())(t);return i=>u=>s(f=>i(r(f)))(a)})};var xe=function(t){return function(e){return t.length===0?e:e.length===0?t:t.concat(e)}};var mr={append:xe};var fn={mempty:[],Semigroup0:()=>mr};var vt=function(t){return function(e){return function(){return e[t]}}},Dl=vt("URL"),Cl=vt("documentURI"),hl=vt("origin"),Tl=vt("compatMode"),Ml=vt("characterSet"),Nl=vt("contentType");var ya=vt("documentElement");function $n(t){return function(e){return function(){return e.createElement(t)}}}function mn(t){return function(e){return function(n){return function(){return n.createElementNS(t,e)}}}}function _r(t){return function(e){return function(){return e.createTextNode(t)}}}var Se=function(t){return function(e){return e[t]}},ba=Se("namespaceURI"),Da=Se("prefix"),Vl=Se("localName"),jl=Se("tagName");function br(t){return function(e){return function(n){return function(){n.setAttribute(t,e)}}}}function Dr(t){return function(e){return function(){e.removeAttribute(t)}}}var dt=function(t){return function(e){return function(){return e[t]}}};var Np=dt("baseURI"),Ta=dt("ownerDocument"),Ma=dt("parentNode"),Na=dt("parentElement");var Ep=dt("childNodes"),gn=dt("firstChild"),Ea=dt("lastChild"),La=dt("previousSibling"),Ie=dt("nextSibling"),Fa=dt("nodeValue");var Lp=dt("textContent");function yn(t){return function(e){return function(){e.textContent=t}}}var Cr=t=>e=>n=>r=>()=>r.implementation.createDocumentType(t,e,n),_n=t=>()=>{let e=document.createElement("div");return e.innerHTML=t,Array.from(e.childNodes)},Pe=t=>e=>()=>{let n=Array.from(t.childNodes),r=new Set(e);n.filter(s=>!r.has(s)).forEach(s=>t.removeChild(s));let o=t.firstChild;for(let s of e){if(o===s){o=o.nextSibling;continue}if(o===null){t.appendChild(s);continue}t.insertBefore(s,o)}};var jt=ce(fn);var Aa=Vt(jt),Tt=t=>e=>t.Bind1().bind(e)(n=>t.Applicative0().pure(x(n,jt.mempty))),hr=ue(jt),Tr=Re(jt),Mr=ie(jt),Nr={append:t=>e=>{let n=t.get,r=e.get;return{run:a=>t.run(o=>{let s=xe(o);return e.run(i=>a(s(i)))}),get:()=>{let a=n(),o=r();return[...a,...o]}}}};var qa=Ht(jt),wa=(()=>{let t=ln(Rt)(be);return e=>n=>t(n)(e)})();var Er=t=>{let e=Aa(t),n=ae(e);return{ask:e.Applicative0().pure,Monad0:()=>n}};var Lr=t=>{let e=qa(t.Applicative0()),n=e.Apply0(),r=n.Functor0(),a={map:s=>{let i=r.map(s);return u=>f=>i(u(f))}},o={apply:s=>i=>u=>n.apply(s(u))(i(u)),Functor0:()=>a};return{pure:s=>{let i=e.pure(s);return u=>i},Apply0:()=>o}},Cn=t=>{let e=t.MonadEffect0().Monad0().Bind1().Apply0().Functor0().map(r=>{}),n=ar(t);return r=>r?a=>e(t.useHooks(a)):n},xa=t=>{let e=Cn(t),n=t.MonadEffect0();return r=>a=>o=>e(r)((()=>{let s=o.get;return{run:i=>o.run(u=>i(n.liftEffect(Pe(a)(u)))),get:()=>{let i=s();return n.liftEffect(Pe(a)(i))}}})())},Sa=t=>{let e=Cn(t),n=sr(t);return r=>a=>o=>{if(o.tag==="PropAttribute"){let s=o._1,i=o._2;return e(r)((()=>{let u=m=>t.MonadEffect0().liftEffect((()=>{if(m.tag==="Nothing")return Dr(s)(a);if(m.tag==="Just")return br(s)(m._1)(a);l()})()),f=i.get;return{run:m=>i.run(D=>m(u(D))),get:()=>{let m=f();return u(m)}}})())}if(o.tag==="PropHandler")return n(a)(o._1)(o._2);if(o.tag==="PropMountEffect")return o._1(a);l()}},Ia=t=>{let e=Sa(t);return n=>{let r=ln(Rt)(n);return a=>o=>s=>r(e(a)(o))(s)}},Pa=t=>{let e=Cn(t),n=t.MonadEffect0();return r=>a=>o=>e(r)((()=>{let s=o.get;return{run:i=>o.run(u=>i(n.liftEffect(yn(u)(a)))),get:()=>{let i=s();return n.liftEffect(yn(i)(a))}}})())},va=t=>{let e=t.Monad0(),n=Qt(It(Nr)(e.Bind1())),r=Er(e).ask,a=se(Mr(t)),o=rn(hr(e)),s=Lr(e);return i=>u=>f=>n.bind(r)(m=>n.bind(a.liftEffect(()=>m.value))(D=>{let q=C=>n.bind(a.liftEffect(f))($=>n.bind(o.tell((()=>{let I=[u($)];return{run:Q=>Q(I),get:()=>I}})()))(()=>s.pure(x($,!1))));if(D.tag==="Just"){let C=i(D._1);if(C.tag==="Just"){let $=C._1;return n.bind(a.liftEffect((()=>{let I=Ie(D._1);return()=>{let Q=I();return rt(Q,E,G)}})()))(I=>n.bind(a.liftEffect(()=>m.value=I))(()=>n.bind(o.tell((()=>{let Q=[D._1];return{run:P=>P(Q),get:()=>Q}})()))(()=>s.pure(x($,!0)))))}}return q(!0)}))},bn=t=>{let e=Qt(It(Nr)(t.Bind1())),n=Lr(t),r=Er(t).ask;return a=>{let o=Ce(nn(Tr(a)));return s=>{let i=s.MonadEffect0(),u=se(Mr(i)),f=va(i),m=Ia(s)(a),D=Pa(s),q=ir(ur(s)(fn)),C=q.MonadEffect0().Monad0().Bind1().Apply0().Functor0().map($=>{});return $=>e.bind(u.liftEffect(Ut))(I=>e.bind(u.liftEffect((()=>{let Q=oe(I);return()=>Q()})()))(Q=>{if($.tag==="ComponentEl"){let P=$._3,H=$._4,V=$._2;return e.bind(f(ct("Element"))(et)($n($._1)(Q)))(z=>{let d=z._1,J=z._2;return e.bind((()=>{let K=Tt(t)(Dn(s)(a)(P)(d));return Mt=>K})())(()=>e.bind((()=>{let K=Tt(t)(m(!J)(d)(V));return Mt=>K})())(()=>n.pure(H)))})}if($.tag==="ComponentElNS"){let P=$._4,H=$._5,V=$._3;return e.bind(f(ct("Element"))(et)(mn($._1)($._2)(Q)))(z=>{let d=z._1,J=z._2;return e.bind((()=>{let K=Tt(t)(Dn(s)(a)(P)(d));return Mt=>K})())(()=>e.bind((()=>{let K=Tt(t)(m(!J)(d)(V));return Mt=>K})())(()=>n.pure(H)))})}if($.tag==="ComponentElVoid"){let P=$._3,H=$._2;return e.bind(f(ct("Element"))(et)($n($._1)(Q)))(V=>e.bind((()=>{let z=Tt(t)(m(!V._2)(V._1)(H));return d=>z})())(()=>n.pure(P)))}if($.tag==="ComponentTextSig"){let P=$._2,H=$._1;return e.bind(f(ct("Text"))(et)(_r("")(Q)))(V=>e.bind((()=>{let z=Tt(t)(D(!V._2)(V._1)(H));return d=>z})())(()=>n.pure(P)))}if($.tag==="ComponentRawSig"){let P=$._2,H=$._1;return e.bind(r)(V=>e.bind((()=>{let z=Tt(t)(s.useHooks((()=>{let d=H.get;return{run:J=>H.run(K=>J(i.liftEffect(_n(K)))),get:()=>{let J=d();return i.liftEffect(_n(J))}}})()));return d=>z})())(z=>e.bind(u.liftEffect(z.get))(d=>e.bind(u.liftEffect(wa(d)(J=>()=>{let K=V.value;if(K.tag==="Just"){let Mt=Ie(K._1)();return V.value=rt(Mt,E,G)}if(K.tag==="Nothing")return V.value=E;l()})))(()=>e.bind(rn(hr(t)).tell(z))(()=>n.pure(P))))))}if($.tag==="ComponentDoctype"){let P=$._4;return e.bind(f(ct("DocumentType"))(et)(Cr($._1)($._2)($._3)(Q)))(()=>n.pure(P))}if($.tag==="ComponentHooks"){let P=$._2;return e.bind((()=>{let H=Tt(t)($._1);return e.bind(V=>H)(o(bn(t)(a)(s)))})())(()=>n.pure(P))}if($.tag==="ComponentSwitch"){let P=$._2;return e.bind((()=>{let H=o(bn(t)(a)(s));return C(q.useHooks((()=>{let V=$._1,z=V.get;return{run:d=>V.run(J=>d(H(J))),get:()=>{let d=z();return H(d)}}})()))})())(()=>n.pure(P))}l()}))}}},Dn=t=>{let e=t.MonadEffect0(),n=e.Monad0(),r=n.Bind1(),a=xa(t);return o=>{let s=Ce(nn(Tr(o)));return i=>u=>r.bind(e.liftEffect((()=>{let f=gn(u);return()=>{let m=f();return{value:rt(m,E,G)}}})()))(f=>r.bind(s(bn(n)(o)(t))(i)(f))(m=>a(!0)(u)(m._2)))}},Fr=t=>{let e=t.MonadEffect0(),n=Dn(t);return r=>{let a=n(r);return o=>s=>e.Monad0().Bind1().bind(e.liftEffect(Pe(s)([])))(()=>a(o)(s))}};var Rr=(t,e,n)=>({tag:t,_1:e,_2:n});var Ba=te(kt)(He),ka=Fr(cr)(rr),Ua=Dt(Ct("Bind",en("ComponentEl","div",[Rr("PropAttribute","class",{run:t=>t(v("Just","w-screen h-screen text-5xl flex justify-center items-center")),get:()=>v("Just","w-screen h-screen text-5xl flex justify-center items-center")})],zn("Hello Jelly!"),void 0),t=>Dt(Ct("Return",t),gt)),gt),Ar=(()=>{let t=Te(ze,xt(Gn)(e=>St(Ba((()=>{let n=ka(Ua);return r=>{let a=n(r);return()=>{a()}}})())(e))));return()=>{t().run()}})();Ar();})();
