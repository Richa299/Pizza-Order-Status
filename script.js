function execute(){

let input_value=document.getElementById("form-value").value
console.log(input_value.length)
if(input_value.length<3){
    alert("enter valid id");
}
else{
document.getElementById("order-placed").style.backgroundColor="#008000"
document.getElementById("order-placed").style.color="white"


const chefReceived=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("chef");
            document.getElementById("chef").style.backgroundColor="#008000"
            document.getElementById("chef").style.color="white"
            resolve()
          },4000)
    })
}

const pizzaSauceAdded=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("pizz-sauce");
            document.getElementById("pizz-sauce").style.backgroundColor="#008000"
            document.getElementById("pizz-sauce").style.color="white"
            resolve()
          },10000)
    })
}

const firstLayerOfCheezeAdded=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("frst");
            document.getElementById("frst-layer").style.backgroundColor="#008000"
            document.getElementById("frst-layer").style.color="white"
            resolve()
          },5000)
    })
}

const toppingsAdded=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("top");
            document.getElementById("toppings").style.backgroundColor="#008000"
            document.getElementById("toppings").style.color="white"
            resolve()
          },12000)
    })
}

const secondLayerOfCheezeAdded=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("second");
            document.getElementById("second").style.backgroundColor="#008000"
            document.getElementById("second").style.color="white"
            resolve()
          },5000)
    })
}

const pizzaBaked=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("baked");
            document.getElementById("pizz-baked").style.backgroundColor="#008000"
            document.getElementById("pizz-baked").style.color="white"
            resolve()
          },15000)
    })
}

const oreganoAddedAndPacked=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("orgegano");
            document.getElementById("Oregano").style.backgroundColor="#008000"
            document.getElementById("Oregano").style.color="white"
            resolve()
          },8000)
    })
}

const packageReceivedAtCounter=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("counter");
            document.getElementById("counter").style.backgroundColor="#008000"
            document.getElementById("counter").style.color="white"
            resolve()
          },2000)
    })
}
chefReceived()
.then(pizzaSauceAdded)
.then(firstLayerOfCheezeAdded)
.then(toppingsAdded)
.then(secondLayerOfCheezeAdded)
.then(pizzaBaked)
.then(oreganoAddedAndPacked)
.then(packageReceivedAtCounter)
.then(()=>{
    document.getElementById("final").style.backgroundColor="#008000"
    document.getElementById("final").style.color="white"
    alert("Hey there!! Your Pizza is ready.." 
    );
})
}
}

