window.onload = function () {

    let options = {
        animationEnabled: true,  
        title:{
            text: "Monthly Sales - 2022"
        },
        axisX: {
            valueFormatString: "MMM"
        },
        axisY: {
            title: "Sales (in Rand)",
            prefix: "R"
        },
        data: [{
            yValueFormatString: "R#,###",
            xValueFormatString: "MMMM",
            type: "spline",
            dataPoints: [
                { x: new Date(2022, 0), y: 25060 },
                { x: new Date(2022, 1), y: 27980 },
                { x: new Date(2022, 2), y: 33800 },
                { x: new Date(2022, 3), y: 49400 },
                { x: new Date(2022, 4), y: 40260 },
                { x: new Date(2022, 5), y: 33900 },
                { x: new Date(2022, 6), y: 48000 },
                { x: new Date(2022, 7), y: 31500 },
                { x: new Date(2022, 8), y: 32300 },
                { x: new Date(2022, 9), y: 42000 },
                { x: new Date(2022, 10), y: 52160 },
                { x: new Date(2022, 11), y: 49400 }
            ]
        }]
    };
    $("#chartContainer").CanvasJSChart(options);
    
    }