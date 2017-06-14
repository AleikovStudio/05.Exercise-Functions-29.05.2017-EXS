function speedCheck(input) {
    let speed = input[0];
    let zone = input[1];

    function getLimit(zone) {
        switch (input) {
            case "motorway":
                return 130;
            case "interstate":
                return 90;
            case "city":
                return 50;
            case "residential":
                return 20;
        }
    }

    function getInfraction(speed, limit) {
        let overSpeed = speed - limit;
        if (overSpeed <= 0) {
            return false;
        } else {
            let limit = getLimit();
            let infraction = getInfraction(speed, limit);
            if (infraction) {
                console.log(infraction);
            }
        }

    }
}


speedCheck(["40", "city"]);