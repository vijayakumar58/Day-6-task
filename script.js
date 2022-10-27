// Day-6 oops task
// 1.https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
// class - movie

class movie{
      constructor (title,studio,rating){
                 this.title=title;
                 this.studio=studio;
                 this.rating=rating
      if (rating==null) {
            return this.rating="PG"
      } 
      else{
           return this.rating=rating
      }
  }
        getPG(){
          var result= arr.filter((element)=>element.rating=="PG")
          return result;
        }
        getmovie(){
            var result1=[`a movie title is ${this.title} create studio ${this.studio} its rating of ${this.rating}`]
            return result1;
        }
  }
  let movie1=new movie("sardhar","avm","Pg20");
  let movie2=new movie("vikram","rajkamal");
  let movie3=new movie("pasanga","little prince","PG7");
  let movie4=new movie("saatai","sk studio");
  let arr=[movie1,movie2,movie3,movie4];
   console.log(movie2.getPG());
   console.log(movie3.getmovie());

   // 2.https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md

   class circle{
      constructor (radius,color){
                 this.radius=radius;
                 this.color=color;
      }
      setradius(rad){
            this.radius=rad
      }
      getradius(){
            var gtrad=`radious :${this.radius}`;
            return gtrad;
      }
      setcolor(col){
            this.color=col;
      }
      getcolor(){
            var gtcol=`color :${this.color}`;
             return gtcol;
      }
      getstring(){
            let string = `circle[radiou=${this.radius},color=${this.color}]`;
            return string;
      }
      getarea(){
            let area=`Area of circle :${((2*3.14)*(this.radius*this.radius))}`;
            return area;
      }
      getcircumfrence(){
            let circumfrence=`Circumfrence of circle :${(2*3.14*this.radius).toFixed(2,2)}`;
            return circumfrence
      }
}
    let circle1=new circle(5.0,"blue");
        circle1.setradius(8.0);
        circle1.setcolor("yello");
    console.log(circle1.getradius());
    console.log(circle1.getcolor());
    console.log(circle1.getstring());
    console.log(circle1.getarea());
    console.log(circle1.getcircumfrence());

   // 3.Write a “person” class to hold all the details.

   class person{
      constructor (fname,lname,faname,gender,mariedstatus,DOB,place,country,degree,job,){
                 this.fname=fname;
                 this.lname=lname;
                 this.faname=faname;
                 this.gender=gender;
                 this.mariedstatus=mariedstatus;
                 this.DOB=DOB;
                 this.place=place;
                 this.country=country;
                 this.degree=degree;
                 this.job=job;
      }
      setdetails(deg){
            this.degree=deg
                 }
      getdetails(){
            let resu=`fname :${this.fname}\nlname :${this.lname}\nfaname :${this.faname}\ngender :${this.gender}\nmariedstatus :${this.mariedstatus}\nDOB :${this.DOB}\nplace :${this.place}\ncountry :${this.country}\ndegree :${this.degree}\njob :${this.job}`
            return resu;
      }
}
  let person1=new person("viyaya","kumar","ranganathan","male","unmaried","12/10/95","dharmapuri","india","B.E","FSWD");
      person1.setdetails("M.S");
  console.log(person1.getdetails());

   // 4.write a class to calculate the uber price.

      class ubrent{
    constructor (name,place,distance,rate,wCharge){
               this.name=name;
               this.place=place;
               this.distance=distance;
               this.rate=rate;
               this.wCharge=wCharge
    }
      setDistance(dist){
            this.distance=dist
      }
      getdistancerate(){
        let mCharge=2000;
        if (this.distance<100){
              return mCharge
        }
      }
      getdistance(){
        let charge=(this.distance*this.rate)+(5*this.wCharge);
            return charge;
      }
}
let ubrent1=new ubrent("vijay","bangalore",20,20,20)
    ubrent1.setDistance(68)

console.log(ubrent1.getdistance());