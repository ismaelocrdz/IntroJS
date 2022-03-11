var comida="Taquitos";
switch(comida){
    case "malteada":
    console.log("Puedes ir a McDonalds");
    break;
    case "Sandwich":
        console.log("Puedes ir a Fresitas");
        break;
        case "Taquitos":            
            console.log("Puedes ir a Los Cocuyos");
            var size="xl"
            if(size=="xl"){
                console.log("Te va a salir muy caro porque es muy grande");
            }
            break;
            default:
                console.log("No estás en México");

}