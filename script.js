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