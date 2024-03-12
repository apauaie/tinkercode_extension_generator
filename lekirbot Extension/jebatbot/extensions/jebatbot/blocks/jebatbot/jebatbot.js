goog.provide("Blockly.Blocks.jebatbot");

goog.require("Blockly.Blocks");

Blockly.Blocks.jebatbot.HUE = "#FF8000";

var warna=155;
/*  wifi  */
Blockly.Blocks["jebatbot_wifi_upload"] = {
  init: function () {
    this.setColour(warna);
    this.setHelpUrl(Blockly.Msg.esp32_url);
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage(
          "blocks/esp8266/esp32.png",
          Blockly.Arduino.imageSize,
          Blockly.Arduino.imageSize
        )
      )
      .appendField("Setup Wireless Upload");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Board Name")
      .appendField(
        new Blockly.FieldDropdown([
          ["Jebat-1", "Jebat-1"],
          ["Jebat-2", "Jebat-2"],
          ["Jebat-3", "Jebat-3"],
          ["Jebat-4", "Jebat-4"],
          ["Jebat-5", "Jebat-5"],
          ["Jebat-6", "Jebat-6"],
          ["Jebat-7", "Jebat-7"],
          ["Jebat-8", "Jebat-8"],
          ["Jebat-9", "Jebat-9"],
          ["Jebat-10", "Jebat-10"],
        ]),
        "hostname"
      );
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.esp32_2)
      .appendField(new Blockly.FieldTextInput("your_WIFI_SSID"), "SSID");
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.esp32_3)
      .appendField(new Blockly.FieldTextInput("your_WIFI_KEY"), "KEY");
    this.setPreviousStatement(false);
    this.setNextStatement(false);
    this.setTooltip(Blockly.Msg.esp32_init_tooltip);
  },
};

Blockly.Blocks.jebatbot_WS2812B_grid = {
  init: function () {
    this.appendDummyInput()
    .appendField(new Blockly.FieldImage("extensions/jebatbot/blocks/jebatbot//media/robotimage.png", 64, 64));

    this.appendDummyInput()
      .appendField(new Blockly.FieldColour("rgb(255, 255, 255)"), "Pixel0")
      .appendField(new Blockly.FieldColour("rgb(255, 255, 255)"), "Pixel1")
      .appendField(new Blockly.FieldColour("rgb(255, 255, 255)"), "Pixel2")
      .appendField(new Blockly.FieldColour("rgb(255, 255, 255)"), "Pixel3")
      .appendField(new Blockly.FieldColour("rgb(255, 255, 255)"), "Pixel4");

    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(warna);
    this.setTooltip("");
    this.setHelpUrl(Blockly.Msg.MatrixLED_WS2812B_URL);
  },
};

Blockly.Blocks["jebatbot_ext_led"] = {
  helpUrl: "",
  init: function () {
    this.setColour(warna);
    this.appendDummyInput()
      .appendField("jebat Mini IO Extender LED")
      .appendField(new Blockly.FieldImage("extensions/jebatbot/blocks/jebatbot//media/robotimage.png", 64, 64))
      .appendField("LED#")
      .appendField(
        new Blockly.FieldDropdown([
          ["RED", "6"],
          ["GREEN", "5"],
        ]),
        "LEDx"
      )
      .appendField("stat")
      .appendField(
        new Blockly.FieldDropdown([
          ["ON", "LOW"],
          ["OFF", "HIGH"],
        ]),
        "STAT"
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Turn LED. Need IO Extender connected to jebat");
  },
};

Blockly.Blocks["jebatbot_ext_stopwatch_control"] = {
  helpUrl: "",
  init: function () {
    this.setColour(warna);
    this.appendDummyInput()
      .appendField("Jebat Mini IO Extender Stopwatch Control")
      .appendField(new Blockly.FieldImage("extensions/jebatbot/blocks/jebatbot//media/robotimage.png", 64, 64))
      .appendField(
        new Blockly.FieldDropdown([
          ["Start", "0"],
          ["Reset", "2"],
          ["Stop", "3"],
        ]),
        "stopwatch"
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(
      "Start , Stop or Reset Stopwatch on OLED. Use together with Stopwatch Run. Must use IO Extender"
    );
  },
};

Blockly.Blocks["jebatbot_ext_stopwatch_run"] = {
  helpUrl: "",
  init: function () {
    this.setColour(warna);
    this.appendDummyInput()
      .appendField("Jebat Mini Stopwatch Run")
      .appendField(new Blockly.FieldImage("extensions/jebatbot/blocks/jebatbot//media/robotimage.png", 64, 64));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(
      "Stopwatch run. Need to be use with Stopwatch Control.Must use IO Extender"
    );
  },
};

Blockly.Blocks["jebatbot_ext_buzzer"] = {
  helpUrl: "",
  init: function () {
    this.setColour(warna);
    this.appendDummyInput()
      .appendField("Jebat Mini IO Extender Buzzer")
      .appendField(new Blockly.FieldImage("extensions/jebatbot/blocks/jebatbot//media/robotimage.png", 64, 64))
      .appendField("stat")
      .appendField(
        new Blockly.FieldDropdown([
          ["ON", "LOW"],
          ["OFF", "HIGH"],
        ]),
        "STAT"
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Turn Buzzer. Need IO Extender connected to jebat");
  },
};

Blockly.Blocks["jebatbot_ext_button"] = {
  helpUrl: "http://arduino.cc/en/Reference/DigitalRead",
  init: function () {
    this.setColour(warna);
    this.appendDummyInput()
      .appendField("Jebat Mini IO Extender Button")
      .appendField(
        new Blockly.FieldImage("extensions/jebatbot/blocks/jebatbot//media//button.png", 64, 64)
      )

      .appendField(
        new Blockly.FieldDropdown([
          ["UP", "1"],
          ["DOWN", "3"],
          ["LEFT", "4"],
          ["RIGHT", "2"],
          ["ENTER", "0"],
        ]),
        "buttonx"
      );

    this.setOutput(true, "Number");
    this.setTooltip(
      "Return Button reading. Need IO Extender connected to jebat"
    );
  },
};

Blockly.Blocks["jebatbot_led_clear"] = {
  helpUrl: "",
  init: function () {
    this.setColour(warna);
    this.appendDummyInput()
      .appendField("Jebat Mini LED Clear")
      .appendField(new Blockly.FieldImage("extensions/jebatbot/blocks/jebatbot//media/robotimage.png", 64, 64));
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Turn LED OFF");
  },
};

Blockly.Blocks["jebatbot_rgb_brightness"] = {
  helpUrl: "",
  init: function () {
    this.setColour(warna);
    this.appendDummyInput()
      .appendField("Jebat Mini RGB Brightness")
      .appendField(new Blockly.FieldImage("extensions/jebatbot/blocks/jebatbot//media/robotimage.png", 64, 64));
    this.appendValueInput("percent", "Number")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Brightness");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("RGB LED Brightness");
  },
};

Blockly.Blocks["jebatbot_led"] = {
  helpUrl: "",
  init: function () {
    this.setColour(warna);
    this.appendDummyInput()
      .appendField("Jebat Mini LED")
      .appendField(new Blockly.FieldImage("extensions/jebatbot/blocks/jebatbot//media/robotimage.png", 64, 64))
      .appendField("LED#")
      .appendField(
        new Blockly.FieldDropdown([
          ["LED1", "0"],
          ["LED2", "1"],
          ["LED3", "2"],
          ["LED4", "3"],
          ["LED5", "4"],
        ]),
        "LEDx"
      )
      .appendField("STAT")
      .appendField(new Blockly.FieldColour("rgb(255, 255, 255)"), "color");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Turn LED");
  },
};
Blockly.Blocks["jebatbot_megablink"] = {
  helpUrl: "",
  init: function () {
    this.setColour(warna);
    this.appendDummyInput()
      .appendField("Jebat Megablink")
      .appendField(new Blockly.FieldImage("extensions/jebatbot/blocks/jebatbot//media/robotimage.png", 64, 64));
    this.appendValueInput("DELAY", "Number")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Delay (ms)");
    this.appendValueInput("R", "Number")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Red");
    this.appendValueInput("G", "Number")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Green");
    this.appendValueInput("B", "Number")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Blue");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Turn Megablink LED");
  },
};

Blockly.Blocks["jebatbot_knightrider"] = {
  helpUrl: "",
  init: function () {
    this.setColour(warna);
    this.appendDummyInput()
      .appendField("Jebat Running Light")
      .appendField(new Blockly.FieldImage("extensions/jebatbot/blocks/jebatbot//media/robotimage.png", 64, 64));
    this.appendValueInput("DELAY", "Number")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Delay (ms)");
    this.appendValueInput("R", "Number")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Red");
    this.appendValueInput("G", "Number")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Green");
    this.appendValueInput("B", "Number")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Blue");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Turn Running Light LED");
  },
};

Blockly.Blocks["jebatbot_motor_steer"] = {
  helpUrl: "",
  init: function () {
    var direction = [
      [
        {
          src: "extensions/jebatbot/blocks/jebatbot//media/turn_forward.png",
          width: 60,
          height: 30,
          alt: "Go Forward",
        },
        "forward",
      ],
      [
        {
          src: "extensions/jebatbot/blocks/jebatbot//media/turn_backward.png",
          width: 60,
          height: 30,
          alt: "Go Reverse",
        },
        "backward",
      ],
      [
        {
          src: "extensions/jebatbot/blocks/jebatbot//media/turnleft.png",
          width: 60,
          height: 30,
          alt: "Turn Left",
        },
        "left",
      ],
      [
        {
          src: "extensions/jebatbot/blocks/jebatbot//media/turnright.png",
          width: 60,
          height: 30,
          alt: "Turn Right",
        },
        "right",
      ],
    ];
    this.setColour(warna);
    this.appendDummyInput()
      .appendField("jebat Mini STEER")
      .appendField(new Blockly.FieldImage("extensions/jebatbot/blocks/jebatbot//media/robotimage.png", 64, 64))
      .appendField("Direction")
      .appendField(new Blockly.FieldDropdown(direction), "DIR");
    this.appendValueInput("SPEED", "Number")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Speed (0~255)");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("MOTOR STEER");
  },
};

Blockly.Blocks["jebatbot_motor_stop"] = {
  helpUrl: "",
  init: function () {
    this.setColour(warna);
    this.appendDummyInput().appendField("jebat Mini Motor Stop");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("MOTOR Stop");
  },
};

Blockly.Blocks["jebatbot_motor_tank"] = {
  helpUrl: "",
  init: function () {
    var direction = [
      [
        {
          src: "extensions/jebatbot/blocks/jebatbot//media/turn_forward.png",
          width: 60,
          height: 30,
          alt: "Go Forward",
        },
        "forward",
      ],
      [
        {
          src: "extensions/jebatbot/blocks/jebatbot//media/turn_backward.png",
          width: 60,
          height: 30,
          alt: "Go Reverse",
        },
        "backward",
      ],
    ];

    this.setColour(warna);
    this.appendDummyInput()
      .appendField("jebat Mini TANK")
      .appendField(new Blockly.FieldImage("extensions/jebatbot/blocks/jebatbot//media/robotimage.png", 64, 64))
      .appendField("Left Wheel")
      .appendField(new Blockly.FieldDropdown(direction), "DIRL")
      .appendField("Right Wheel")
      .appendField(new Blockly.FieldDropdown(direction), "DIRR");
    this.appendValueInput("SPEEDL", "Number")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Speed Left(0~255)");
    this.appendValueInput("SPEEDR", "Number")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Speed Right(0~255)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("MOTOR TANK");
  },
};

/*
Blockly.Blocks['jebatbot_ultrasonic_read'] = {
  helpUrl: 'http://arduino.cc/en/Reference/AnalogRead',
  init: function() {
    this.setColour(warna);
    this.appendDummyInput()
        .appendField("jebat Mini Ultrasonic");

    this.setOutput(true, 'Number');
    this.setTooltip('Return distanse in CM');
  }
};
*/

Blockly.Blocks["jebatbot_ultrasonic_read"] = {
  helpUrl: "http://arduino.cc/en/Reference/Ultrasonic",
  init: function () {
    this.setColour(warna);
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage("extensions/jebatbot/blocks/jebatbot//media//SR04.png", 64, 64)
      )

      .appendField("Ultrasonic Sensor");
    this.setOutput(true, "Number");
    this.setTooltip("Return Ultrasonic Distance reading in CM");
  },
};

Blockly.Blocks["jebatbot_linesensor"] = {
  helpUrl: "http://arduino.cc/en/Reference/AnalogRead",
  init: function () {
    this.setColour(warna);
    this.appendDummyInput()
      .appendField("jebat Mini Line Sensor")
      .appendField(
        new Blockly.FieldDropdown([
          ["s1", "35"],
          ["s2", "33"],
          ["s3", "36"],
          ["s4", "34"],
          ["s5", "39"],
        ]),
        "sensorx"
      );
    this.setOutput(true, "Number");
    this.setTooltip("Return line sensor reading");
  },
};

Blockly.Blocks["jebatbot_calibrate"] = {
  helpUrl: "http://www.arduino.cc/playground/",
  init: function () {
    this.setColour(warna);
    this.appendDummyInput().appendField("jebat Calibrate Line Sensor");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Calibrate Line Sensor");
  },
};

Blockly.Blocks["jebatbot_tracer"] = {
  helpUrl: "",
  init: function () {
    var options = [
      [
        {
          src: "extensions/jebatbot/blocks/jebatbot//media/blackonwhite.jpg",
          width: 60,
          height: 30,
          alt: "Black Line",
        },
        "1",
      ],
      [
        {
          src: "extensions/jebatbot/blocks/jebatbot//media/whiteonblack.jpg",
          width: 60,
          height: 30,
          alt: "White Line",
        },
        "0",
      ],
    ];
    this.setColour(warna);
    this.appendDummyInput()
      .appendField("jebat Mini Line Tracer")
      .appendField(new Blockly.FieldImage("extensions/jebatbot/blocks/jebatbot//media/robotimage.png", 64, 64))
      .appendField(new Blockly.FieldDropdown(options), "line");

    this.appendValueInput("LeftRight", "Number")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Base Speed");
    this.appendValueInput("Kp", "Number")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("KP");
    this.appendValueInput("Kd", "Number")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("KD");
    this.setPreviousStatement(true, null);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setTooltip(
      "Line Tracer\nBase Speed: Base Speed(0~255)\nKP: KP(0.0~1)\nKD(0.0~1)"
    );
  },
};

Blockly.Blocks["jebatbot_dtracer"] = {
  helpUrl: "",
  init: function () {
    var options = [
      [
        {
          src: "extensions/jebatbot/blocks/jebatbot//media/blackonwhite.jpg",
          width: 60,
          height: 30,
          alt: "Black Line",
        },
        "1",
      ],
      [
        {
          src: "extensions/jebatbot/blocks/jebatbot//media/whiteonblack.jpg",
          width: 60,
          height: 30,
          alt: "White Line",
        },
        "0",
      ],
    ];
    this.setColour(warna);
    this.appendDummyInput()
      .appendField("jebat Mini Tracer with Delay")
      .appendField(new Blockly.FieldImage("extensions/jebatbot/blocks/jebatbot//media/robotimage.png", 64, 64))
      .appendField(new Blockly.FieldDropdown(options), "line");
    this.appendValueInput("LeftRight", "Number")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Base Speed");
    this.appendValueInput("Kp", "Number")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("KP");
    this.appendValueInput("Kd", "Number")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("KD");
    this.appendValueInput("Delay", "Number")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Delay");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(
      "Line Tracer with Delay\nBase Speed: Base Speed(0~255)\nKP: KP(0.0~1)\nKD(0.0~1)\nDelay: Delay(0~10000)"
    );
  },
};

Blockly.Blocks["jebatbot_findline"] = {
  helpUrl: "",
  init: function () {
    var options = [
      [
        {
          src: "extensions/jebatbot/blocks/jebatbot//media/blackonwhite.jpg",
          width: 60,
          height: 30,
          alt: "Black Line",
        },
        "1",
      ],
      [
        {
          src: "extensions/jebatbot/blocks/jebatbot//media/whiteonblack.jpg",
          width: 60,
          height: 30,
          alt: "White Line",
        },
        "0",
      ],
    ];
    this.setColour(warna);
    this.appendDummyInput()
      .appendField("jebat Find Line")
      .appendField(new Blockly.FieldImage("extensions/jebatbot/blocks/jebatbot//media/robotimage.png", 64, 64))
      .appendField(new Blockly.FieldDropdown(options), "line");
    this.appendValueInput("LeftRight", "Number")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Base Speed(0~255)");
    this.appendValueInput("Sensor", "Number")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Sensor Threshold(0~1000)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Find Line");
  },
};

Blockly.Blocks["jebatbot_path_finder"] = {
  helpUrl: "",
  init: function () {
    var lineoptions = [
      [
        {
          src: "extensions/jebatbot/blocks/jebatbot//media/blackonwhite.jpg",
          width: 60,
          height: 30,
          alt: "Black Line",
        },
        "1",
      ],
      [
        {
          src: "extensions/jebatbot/blocks/jebatbot//media/whiteonblack.jpg",
          width: 60,
          height: 30,
          alt: "White Line",
        },
        "0",
      ],
    ];
    var junctionOptions = [
      [
        {
          src: "extensions/jebatbot/blocks/jebatbot//media/junctionleft.png",
          width: 60,
          height: 30,
          alt: "Left",
        },
        "2",
      ],
      [
        {
          src: "extensions/jebatbot/blocks/jebatbot//media/junctionright.png",
          width: 60,
          height: 30,
          alt: "Right",
        },
        "1",
      ],
      [
        {
          src: "extensions/jebatbot/blocks/jebatbot//media/middle.png",
          width: 60,
          height: 30,
          alt: "Middle",
        },
        "3",
      ],
    ];
    var actionOptions = [
      [
        {
          src: "extensions/jebatbot/blocks/jebatbot//media/turnleft.png",
          width: 60,
          height: 30,
          alt: "Turn Left",
        },
        "3",
      ],
      [
        {
          src: "extensions/jebatbot/blocks/jebatbot//media/turnright.png",
          width: 60,
          height: 30,
          alt: "Turn Right",
        },
        "2",
      ],
      [
        {
          src: "extensions/jebatbot/blocks/jebatbot//media/forward.png",
          width: 60,
          height: 30,
          alt: "Stop",
        },
        "1",
      ],
    ];

    this.setColour(warna);
    this.appendDummyInput()
      .appendField("jebat Mini Path Finder")
      .appendField(new Blockly.FieldImage("extensions/jebatbot/blocks/jebatbot//media/robotimage.png", 64, 64))
      .appendField(new Blockly.FieldDropdown(lineoptions), "line")

      .appendField("Junction")
      .appendField(new Blockly.FieldDropdown(junctionOptions), "junction")
      .appendField("Action")
      .appendField(new Blockly.FieldDropdown(actionOptions), "action");

    /*
	.appendField("Base Speed")
	.appendField(new Blockly.FieldNumber(100, 0, 255, 10), 'LeftRight')
	.appendField("KP")
	.appendField(new Blockly.FieldNumber(0.1, 0.0, 0.1, 10), 'Kp')
	.appendField("KD")
	.appendField(new Blockly.FieldNumber(0.2, 0.0, 0.1, 10), 'Kd')
	.appendField("Sensor Threshold")
	.appendField(new Blockly.FieldNumber(900, 0, 1000, 10), 'Sensor')
*/
    this.appendValueInput("LeftRight", "Number")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Base Speed");
    this.appendValueInput("Turn", "Number")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Sharp Turn");

    this.appendValueInput("Kp", "Number")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("KP");
    this.appendValueInput("Kd", "Number")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("KD");
    this.appendValueInput("Sensor", "Number")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Sensor Threshold");
    this.appendValueInput("FDelay", "Number")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("F Delay");
    this.appendValueInput("TDelay", "Number")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("T Delay");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(
      "Line Tracer\nBase Speed: Base Speed(0~255)\nKP: KP(0.0~1)\nKD: KD(0.0~1)\nSensor Threshold: Sensor Threshold(0~1000)\nSharp Turn: Sharp Turn(0-Sharp, 100-Not Sharp)\nF Delay: F Delay(0~1000)\nT Delay: T Delay(0~1000)"
    );
  },
};

Blockly.Blocks["jebatbot_turn_at_center"] = {
  helpUrl: "",
  init: function () {
    var lineOptions = [
      [
        {
          src: "extensions/jebatbot/blocks/jebatbot//media/blackonwhite.jpg",
          width: 60,
          height: 30,
          alt: "Black Line",
        },
        "1",
      ],
      [
        {
          src: "extensions/jebatbot/blocks/jebatbot//media/whiteonblack.jpg",
          width: 60,
          height: 30,
          alt: "White Line",
        },
        "0",
      ],
    ];
    var actionOptions = [
      [
        {
          src: "extensions/jebatbot/blocks/jebatbot//media/turnleft.png",
          width: 60,
          height: 30,
          alt: "Turn Left",
        },
        "1",
      ],
      [
        {
          src: "extensions/jebatbot/blocks/jebatbot//media/turnright.png",
          width: 60,
          height: 30,
          alt: "Turn Right",
        },
        "0",
      ],
    ];
    this.setColour(warna);
    this.appendDummyInput()
      .appendField("jebat Mini Turn at Center")
      .appendField(new Blockly.FieldImage("extensions/jebatbot/blocks/jebatbot//media/robotimage.png", 64, 64))
      .appendField(new Blockly.FieldDropdown(lineOptions), "line")
      .appendField("Direction")
      .appendField(new Blockly.FieldDropdown(actionOptions), "DIR");
    this.appendValueInput("speed", "Number")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Base Speed");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Line Turn at Center\nBase Speed: Base Speed(0~255)");
  },
};

Blockly.Blocks["jebatbot_ldr"] = {
  helpUrl: "http://arduino.cc/en/Reference/AnalogRead",
  init: function () {
    this.setColour(warna);
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage("extensions/jebatbot/blocks/jebatbot//media//ldr-png.png", 64, 64)
      )

      .appendField("jebat Mini Light Sensor");

    this.setOutput(true, "Number");
    this.setTooltip("Return LDR reading");
  },
};

Blockly.Blocks["jebatbot_button"] = {
  helpUrl: "http://arduino.cc/en/Reference/AnalogRead",
  init: function () {
    this.setColour(warna);
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage("extensions/jebatbot/blocks/jebatbot//media/button.png", 64, 64)
      )

      .appendField("jebat Mini Button");

    this.setOutput(true, "Number");
    this.setTooltip("Return Button reading");
  },
};

Blockly.Blocks["jebatbot_tillJunction"] = {
  helpUrl: "",
  init: function () {
    var lineOptions = [
      [
        {
          src: "extensions/jebatbot/blocks/jebatbot//media/blackonwhite.jpg",
          width: 60,
          height: 30,
          alt: "Black Line",
        },
        "1",
      ],
      [
        {
          src: "extensions/jebatbot/blocks/jebatbot//media/whiteonblack.jpg",
          width: 60,
          height: 30,
          alt: "White Line",
        },
        "0",
      ],
    ];
    var junctionOptions = [
      [
        {
          src: "extensions/jebatbot/blocks/jebatbot//media/junctionleft.png",
          width: 60,
          height: 30,
          alt: "Left",
        },
        "2",
      ],
      [
        {
          src: "extensions/jebatbot/blocks/jebatbot//media/leftforward.png",
          width: 60,
          height: 30,
          alt: "Left Forward",
        },
        "22",
      ],
      [
        {
          src: "extensions/jebatbot/blocks/jebatbot//media/rightforward.png",
          width: 60,
          height: 30,
          alt: "Right Forward",
        },
        "11",
      ],
      [
        {
          src: "extensions/jebatbot/blocks/jebatbot//media/junctionright.png",
          width: 60,
          height: 30,
          alt: "Right",
        },
        "1",
      ],
      [
        {
          src: "extensions/jebatbot/blocks/jebatbot//media/middle.png",
          width: 60,
          height: 30,
          alt: "Middle",
        },
        "0",
      ],
      [
        {
          src: "extensions/jebatbot/blocks/jebatbot//media/middle_side.png",
          width: 60,
          height: 30,
          alt: "Middle Left",
        },
        "3",
      ],
    ];
    var actionOptions = [
      [
        {
          src: "extensions/jebatbot/blocks/jebatbot//media/turnleft.png",
          width: 60,
          height: 30,
          alt: "Turn Left",
        },
        "1",
      ],
      [
        {
          src: "extensions/jebatbot/blocks/jebatbot//media/turnright.png",
          width: 60,
          height: 30,
          alt: "Turn Right",
        },
        "0",
      ],
      [
        {
          src: "extensions/jebatbot/blocks/jebatbot//media/forward.png",
          width: 60,
          height: 30,
          alt: "Forward",
        },
        "2",
      ],
    ];
    this.setColour(warna);
    this.appendDummyInput()
      .appendField("jebat Mini Till Junction")
      .appendField(new Blockly.FieldImage("extensions/jebatbot/blocks/jebatbot//media/robotimage.png", 64, 64))
      .appendField(new Blockly.FieldDropdown(lineOptions), "line")
      .appendField("Junction")
      .appendField(new Blockly.FieldDropdown(junctionOptions), "junction")
      .appendField("Action")
      .appendField(new Blockly.FieldDropdown(actionOptions), "action");
    this.appendValueInput("LeftRight", "Number")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Base Speed");
    this.appendValueInput("turnspeed", "Number")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Turn Speed");
    this.appendValueInput("Kp", "Number")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("KP");
    this.appendValueInput("Kd", "Number")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("KD");
    this.appendValueInput("forwarddelay", "Number")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Forward Delay");
    this.appendValueInput("turndelay", "Number")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Turn Delay");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(
      "Line Tracer till Junction\nBase Speed: Base Speed(0~255) \nTurn Speed: Turn Speed(0~255)\n KP: KP(0.0~1)\nKD: KD(0.0~1)\nForward Delay: Forward Delay(0~500)\nTurn Delay: Turn Delay(0~500)"
    );
  },
};

Blockly.Blocks["jebatbot_bluetooth_ready"] = {
  helpUrl: "http://arduino.cc/en/Reference/bluetooth",
  init: function () {
    this.setColour(warna);
    this.appendDummyInput().appendField("jebat Mini Bluetooth Data Ready?");
    this.setOutput(true, "Boolean");

    this.setTooltip("Return Bluetooth ready/not (Boolean)");
  },
};

Blockly.Blocks["jebatbot_bluetooth_data"] = {
  helpUrl: "http://arduino.cc/en/Reference/bluetooth",
  init: function () {
    this.setColour(warna);
    this.appendDummyInput().appendField("Read jebat Mini Bluetooth Data");
    this.setOutput(true, "String");
    this.setTooltip("Return Bluetooth data in Char");
  },
};

Blockly.Blocks["jebatbot_colorsensor"] = {
  helpUrl: "http://arduino.cc/en/Reference/colorsensor",
  init: function () {
    this.setColour(warna);
    this.appendDummyInput().appendField("jebat Mini Color Sensor");
    this.setOutput(true, "String");
    this.setTooltip(
      "Return Color as in r for red,g for green,b for blue Character. Please connect Color Sensor to A4-SDA A5-SCL"
    );
  },
};

Blockly.Blocks["jebatbot_oled_clear"] = {
  helpUrl: "http://www.arduino.cc/playground/",
  init: function () {
    this.setColour(warna);
    this.appendDummyInput().appendField("jebat Mini Clear OLED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Clear OLED. Please connect OLED to A4-SDA A5-SCL");
  },
};

Blockly.Blocks["jebatbot_oled_display"] = {
  helpUrl: "http://www.arduino.cc/playground/",
  init: function () {
    this.setColour(warna);
    this.appendDummyInput().appendField("jebat Mini Display OLED");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Display OLED. Please connect OLED to A4-SDA A5-SCL");
  },
};

Blockly.Blocks["jebatbot_oled_write"] = {
  init: function () {
    this.setColour(warna);
    this.appendValueInput("CONTENT")
      .setCheck("String")
      .appendField("jebat Mini OLED Write");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(
      "Print DATA on OLED. Need to use with OLED  Clear or Display block"
    );
  },
};

Blockly.Blocks["jebatbot_oled_clearwritedisplay"] = {
  init: function () {
    this.setColour(warna);
    this.appendValueInput("CONTENT")
      .setCheck("String")
      .appendField("jebat Mini OLED Clear & Write");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Print DATA on OLED. Please connect OLED to A4-SDA A5-SCL");
  },
};
Blockly.Blocks["jebatbot_oled_cursor"] = {
  init: function () {
    this.setColour(warna);
    this.appendDummyInput()
      .appendField("jebat Mini OLED Cursor")
      .appendField(new Blockly.FieldImage("extensions/jebatbot/blocks/jebatbot//media/oled.png", 64, 64));
    this.appendValueInput("x", "Number").appendField("x").setCheck("Number");
    this.appendValueInput("y", "Number").appendField("y").setCheck("Number");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Set Cursor. Please connect OLED to A4-SDA A5-SCL");
  },
};
Blockly.Blocks["jebatbot_oled_size"] = {
  init: function () {
    this.setColour(warna);
    this.appendDummyInput().appendField("jebat Mini OLED Text Size");
    this.appendValueInput("size", "Number")
      .appendField("size")
      .setCheck("Number");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Set Size.Please connect OLED to A4-SDA A5-SCL");
  },
};

Blockly.Blocks["jebatbot_oled_color"] = {
  helpUrl: "",
  init: function () {
    this.setColour(warna);
    this.appendDummyInput()
      .appendField("Select OLED Color")
      .appendField(new Blockly.FieldImage("extensions/jebatbot/blocks/jebatbot//media/oled.png", 64, 64))
      .appendField(
        new Blockly.FieldDropdown([
          ["WHITE", "WHITE"],
          ["YELLOW", "YELLOW"],
        ]),
        "colori"
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("OLED Color. Please connect OLED to A4-SDA A5-SCL");
  },
};

Blockly.Blocks["jebatbot_sound"] = {
  helpUrl: "",
  init: function () {
    this.setColour(warna);
    this.appendDummyInput()
      .appendField("Play Sound")
      .appendField(
        new Blockly.FieldDropdown([
          ["cat1", "meow"],
          ["cat2", "meow2"],
          ["dog", "ruff"],
          ["bird", "chirp"],
        ]),
        "sound"
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Sound. Please connect Buzzer to MISO");
  },
};

//servo block
Blockly.Blocks["jebatbot_servo_move"] = {
  helpUrl: "http://www.arduino.cc/playground/ComponentLib/servo",
  init: function () {
    this.setColour(warna);
    this.appendDummyInput()
      .appendField("Servo")
      .appendField(
        new Blockly.FieldImage("extensions/jebatbot/blocks/jebatbot//media//servo.png", 64, 64)
      )
      .appendField(
        new Blockly.FieldDropdown([
          ["AD4", "18"],
          ["AD5", "19"],
        ]),
        "port"
      );
    this.appendValueInput("DEGREE", "Number")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Degree (0~180)");
    this.appendValueInput("delayx", "Number")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Delay (0~1000)");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("move between 0~180 degree");
  },
};

Blockly.Blocks["jebatbot_gripper"] = {
  helpUrl: "",
  init: function () {
    this.setColour(warna);
    this.appendDummyInput()
      .appendField("jebat Gripper")
      .appendField(
        new Blockly.FieldImage("extensions/jebatbot/blocks/jebatbot//media//grip.png", 64, 64)
      )
      .appendField(
        new Blockly.FieldDropdown([
          ["AD4", "18"],
          ["AD5", "19"],
        ]),
        "port"
      );
    this.appendValueInput("GRIP", "Number")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Gripper Power (0~100)");

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("move between 0~100 gripper power");
  },
};
