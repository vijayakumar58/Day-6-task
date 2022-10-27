// Day-6 oops task
// 1.https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
// class - movie

class movie{
      constructor (title,studio,rating){
                 this.title=title;
                 this.studio=studio;
                 this.rating=rating;
                 
      }
      if (this.rating=null) {
            return PG;
      }
        getmovie(){
          let sar=(`this movie title :${this.title} create studio : ${this.studio} its rating of :${this.rating}`);
              return sar;
        }
  }
  let movie1=new movie("sardhar","avm","Pg20");
  let movie2=new movie("vikram","rajkamal");
  console.log(movie2.getmovie());

// class ubrent{
//     constructor (name,place,distance,rate,wCharge){
//                this.name=name;
//                this.place=place;
//                this.distance=distance;
//                this.rate=rate;
//                this.wCharge=wCharge
//     }
//       setDistance(dist){
//             this.distance=dist
//       }
//       getdistancerate(){
//         let mCharge=2000;
//         if (this.distance<100){
//               return mCharge
//         }
//       }
//       getdistance(){
//         let charge=(this.distance*this.rate)+(5*this.wCharge);
//             return charge;
//       }
// }
// let ubrent1=new ubrent("vijay","bangalore",20,20,20)
//     ubrent1.setDistance(68)

// console.log(ubrent1.getdistance());