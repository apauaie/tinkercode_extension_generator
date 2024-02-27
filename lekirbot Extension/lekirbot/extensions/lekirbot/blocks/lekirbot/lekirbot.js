goog.provide("Blockly.Blocks.lekirbot");
goog.require("Blockly.Blocks");
goog.require("Blockly.Types");

var warna=155;
//LED Output
Blockly.Blocks["lekirbot_led"] = {
  helpUrl: "",
  init: function () {
    this.setColour(warna);
    this.appendDummyInput()
      .appendField("lekirbot LED")
      .appendField(
        new Blockly.FieldImage("extensions/lekirbot/blocks/lekirbot//media/robotimage.png", 64, 64)
      )
      .appendField("LED#")
      .appendField(
        new Blockly.FieldDropdown([
          ["LED1", "11"],
          ["LED2", "13"],
          ["LED3", "7"],
          ["LED4", "12"],
          ["LED5", "4"],
        ]),
        "LEDx"
      )
      .appendField("stat")
      .appendField(
        new Blockly.FieldDropdown([
          ["ON", "ON"],
          ["OFF", "OFF"],
        ]),
        "STAT"
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Turn LED");
  },
};





Blockly.Blocks["lekirbot_megablink"] = {
  helpUrl: "",
  init: function () {
    this.setColour(warna);
    this.appendDummyInput()
      .appendField("lekirbot Megablink")
      .appendField(
        new Blockly.FieldImage("extensions/lekirbot/blocks/lekirbot//media/robotimage.png", 64, 64)
      );
    this.appendValueInput("DELAY", "Number")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Delay (ms)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Turn Megablink LED");
  },
};

Blockly.Blocks["lekirbot_knightrider"] = {
  helpUrl: "",
  init: function () {
    this.setColour(warna);
    this.appendDummyInput()
      .appendField("lekirbot Running Light")
      .appendField(
        new Blockly.FieldImage("extensions/lekirbot/blocks/lekirbot//media/robotimage.png", 64, 64)
      );
    this.appendValueInput("DELAY", "Number")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Delay (ms)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Turn Running Light LED");
  },
};

//Motor Steer

Blockly.Blocks["lekirbot_motor_steer"] = {
  helpUrl: "",
  init: function () {
    var direction = [
      [
        {
          src: "extensions/lekirbot/blocks/lekirbot//media/turn_forward.png",
          width: 60,
          height: 30,
          alt: "Go Forward",
        },
        "forward",
      ],
      [
        {
          src: "extensions/lekirbot/blocks/lekirbot//media/turn_backward.png",
          width: 60,
          height: 30,
          alt: "Go Reverse",
        },
        "backward",
      ],
      [
        {
          src: "extensions/lekirbot/blocks/lekirbot//media/turnleft.png",
          width: 60,
          height: 30,
          alt: "Turn Left",
        },
        "left",
      ],
      [
        {
          src: "extensions/lekirbot/blocks/lekirbot//media/turnright.png",
          width: 60,
          height: 30,
          alt: "Turn Right",
        },
        "right",
      ],
    ];
    this.setColour(warna);
    this.appendDummyInput()
      .appendField("lekirbot STEER")
      .appendField(
        new Blockly.FieldImage("extensions/lekirbot/blocks/lekirbot//media/robotimage.png", 64, 64)
      )
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

Blockly.Blocks["lekirbot_motor_tank"] = {
  helpUrl: "",
  init: function () {
    var direction = [
      [
        {
          src: "extensions/lekirbot/blocks/lekirbot//media/turn_forward.png",
          width: 60,
          height: 30,
          alt: "Go Forward",
        },
        "forward",
      ],
      [
        {
          src: "extensions/lekirbot/blocks/lekirbot//media/turn_backward.png",
          width: 60,
          height: 30,
          alt: "Go Reverse",
        },
        "backward",
      ],
    ];

    this.setColour(warna);
    this.appendDummyInput()
      .appendField("lekirbot TANK")
      .appendField(
        new Blockly.FieldImage("extensions/lekirbot/blocks/lekirbot//media/robotimage.png", 64, 64)
      )
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

Blockly.Blocks["lekirbot_motor_stop"] = {
  helpUrl: "",
  init: function () {
    this.setColour(warna);
    this.appendDummyInput().appendField("lekirbot Motor Stop");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("MOTOR Stop");
  },
};

Blockly.Blocks["lekirbot_calibrate"] = {
  helpUrl: "http://www.arduino.cc/playground/",
  init: function () {
    this.setColour(warna);
    this.appendDummyInput().appendField("lekirbot Calibrate Line Sensor");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("Calibrate Line Sensor");
  },
};

Blockly.Blocks["lekirbot_tracer"] = {
  helpUrl: "",
  init: function () {
    var options = [
      [
        {
          src: "extensions/lekirbot/blocks/lekirbot//media/blackonwhite.jpg",
          width: 60,
          height: 30,
          alt: "Black Line",
        },
        "1",
      ],
      [
        {
          src: "extensions/lekirbot/blocks/lekirbot//media/whiteonblack.jpg",
          width: 60,
          height: 30,
          alt: "White Line",
        },
        "0",
      ],
    ];
    this.setColour(warna);
    this.appendDummyInput()
      .appendField("lekirbot Line Tracer")
      .appendField(
        new Blockly.FieldImage("extensions/lekirbot/blocks/lekirbot//media/robotimage.png", 64, 64)
      )
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

Blockly.Blocks["lekirbot_dtracer"] = {
  helpUrl: "",
  init: function () {
    var options = [
      [
        {
          src: "extensions/lekirbot/blocks/lekirbot//media/blackonwhite.jpg",
          width: 60,
          height: 30,
          alt: "Black Line",
        },
        "1",
      ],
      [
        {
          src: "extensions/lekirbot/blocks/lekirbot//media/whiteonblack.jpg",
          width: 60,
          height: 30,
          alt: "White Line",
        },
        "0",
      ],
    ];
    this.setColour(warna);
    this.appendDummyInput()
      .appendField("lekirbot Tracer with Delay")
      .appendField(
        new Blockly.FieldImage("extensions/lekirbot/blocks/lekirbot//media/robotimage.png", 64, 64)
      )
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

Blockly.Blocks["lekirbot_tillJunction"] = {
  helpUrl: "",
  init: function () {
    var lineOptions = [
      [
        {
          src: "extensions/lekirbot/blocks/lekirbot//media/blackonwhite.jpg",
          width: 60,
          height: 30,
          alt: "Black Line",
        },
        "1",
      ],
      [
        {
          src: "extensions/lekirbot/blocks/lekirbot//media/whiteonblack.jpg",
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
          src: "extensions/lekirbot/blocks/lekirbot//media/junctionleft.png",
          width: 60,
          height: 30,
          alt: "Left",
        },
        "2",
      ],
      [
        {
          src: "extensions/lekirbot/blocks/lekirbot//media/leftforward.png",
          width: 60,
          height: 30,
          alt: "Left Forward",
        },
        "22",
      ],
      [
        {
          src: "extensions/lekirbot/blocks/lekirbot//media/rightforward.png",
          width: 60,
          height: 30,
          alt: "Right Forward",
        },
        "11",
      ],
      [
        {
          src: "extensions/lekirbot/blocks/lekirbot//media/junctionright.png",
          width: 60,
          height: 30,
          alt: "Right",
        },
        "1",
      ],
      [
        {
          src: "extensions/lekirbot/blocks/lekirbot//media/middle.png",
          width: 60,
          height: 30,
          alt: "Middle",
        },
        "0",
      ],
      [
        {
          src: "extensions/lekirbot/blocks/lekirbot//media/middle_side.png",
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
          src: "extensions/lekirbot/blocks/lekirbot//media/turnleft.png",
          width: 60,
          height: 30,
          alt: "Turn Left",
        },
        "1",
      ],
      [
        {
          src: "extensions/lekirbot/blocks/lekirbot//media/turnright.png",
          width: 60,
          height: 30,
          alt: "Turn Right",
        },
        "0",
      ],
      [
        {
          src: "extensions/lekirbot/blocks/lekirbot//media/forward.png",
          width: 60,
          height: 30,
          alt: "Forward",
        },
        "2",
      ],
    ];
    this.setColour(warna);
    this.appendDummyInput()
      .appendField("lekirbot Till Junction")
      .appendField(
        new Blockly.FieldImage("extensions/lekirbot/blocks/lekirbot//media/robotimage.png", 64, 64)
      )
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

Blockly.Blocks["lekirbot_turn_at_center"] = {
  helpUrl: "",
  init: function () {
    var lineOptions = [
      [
        {
          src: "extensions/lekirbot/blocks/lekirbot//media/blackonwhite.jpg",
          width: 60,
          height: 30,
          alt: "Black Line",
        },
        "1",
      ],
      [
        {
          src: "extensions/lekirbot/blocks/lekirbot//media/whiteonblack.jpg",
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
          src: "extensions/lekirbot/blocks/lekirbot//media/turnleft.png",
          width: 60,
          height: 30,
          alt: "Turn Left",
        },
        "1",
      ],
      [
        {
          src: "extensions/lekirbot/blocks/lekirbot//media/turnright.png",
          width: 60,
          height: 30,
          alt: "Turn Right",
        },
        "0",
      ],
    ];
    this.setColour(warna);
    this.appendDummyInput()
      .appendField("lekirbot Turn at Center")
      .appendField(
        new Blockly.FieldImage("extensions/lekirbot/blocks/lekirbot//media/robotimage.png", 64, 64)
      )
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

Blockly.Blocks["lekirbot_findline"] = {
  helpUrl: "",
  init: function () {
    var options = [
      [
        {
          src: "extensions/lekirbot/blocks/lekirbot//media/blackonwhite.jpg",
          width: 60,
          height: 30,
          alt: "Black Line",
        },
        "1",
      ],
      [
        {
          src: "extensions/lekirbot/blocks/lekirbot//media/whiteonblack.jpg",
          width: 60,
          height: 30,
          alt: "White Line",
        },
        "0",
      ],
    ];
    this.setColour(warna);
    this.appendDummyInput()
      .appendField("lekirbot Find Line")
      .appendField(
        new Blockly.FieldImage("extensions/lekirbot/blocks/lekirbot//media/robotimage.png", 64, 64)
      )
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

//Input Sensor

Blockly.Blocks["lekirbot_linesensor"] = {
  helpUrl: "http://arduino.cc/en/Reference/AnalogRead",
  init: function () {
    this.setColour(warna);
    this.appendDummyInput()
      .appendField("lekirbot Line Sensor")
      .appendField(
        new Blockly.FieldDropdown([
          ["s1", "A6"],
          ["s2", "A3"],
          ["s3", "A2"],
          ["s4", "A1"],
          ["s5", "A0"],
        ]),
        "sensorx"
      );
    this.setOutput(true, "Number");
    this.setTooltip("Return line sensor reading");
  },
};

Blockly.Blocks["lekirbot_ultrasonic_read"] = {
  helpUrl: "http://arduino.cc/en/Reference/Ultrasonic",
  init: function () {
    this.setColour(warna);
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage("blocks/makerkit/media/SR04.png", 64, 64)
      )
      .appendField("lekirbot Ultrasonic Sensor");
    this.setOutput(true, "Number");
    this.setTooltip("Return Ultrasonic Distance reading in CM");
  },
};

Blockly.Blocks["lekirbot_ldr"] = {
  helpUrl: "http://arduino.cc/en/Reference/AnalogRead",
  init: function () {
    this.setColour(warna);
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage("blocks/makerkit/media/ldr-png.png", 64, 64)
      )
      .appendField("lekirbot Light Sensor");
    this.setOutput(true, "Number");
    this.setTooltip("Return LDR reading");
  },
};

Blockly.Blocks["lekirbot_ext_button"] = {
  helpUrl: "http://arduino.cc/en/Reference/DigitalRead",
  init: function () {
    this.setColour(warna);
    this.appendDummyInput()
      .appendField("lekirbot IO Extender Button")
      .appendField(
        new Blockly.FieldImage("extensions/lekirbot/blocks/lekirbot//media/ioext.png", 128, 64)
      )
      .appendField(
        new Blockly.FieldImage("blocks/makerkit/media/button.png", 64, 64)
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
      "Return Button reading. Need IO Extender connected to lekirbot"
    );
  },
};

Blockly.Blocks["lekirbot_gripper"] = {
  helpUrl: "",
  init: function () {
    this.setColour(warna);
    this.appendDummyInput()
      .appendField("lekirbot Gripper")
      .appendField(
        new Blockly.FieldImage("blocks/makerkit/media/grip.png", 64, 64)
      )
      .appendField(
        new Blockly.FieldDropdown([
          ["IO9", "9"],
          ["IO10", "10"],
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

Blockly.Blocks["lekirbot_servo_move"] = {
  helpUrl: "http://www.arduino.cc/playground/ComponentLib/servo",
  init: function () {
    this.setColour(warna);
    this.appendDummyInput()
      .appendField("Servo")
      .appendField(
        new Blockly.FieldImage("blocks/makerkit/media/servo.png", 64, 64)
      )
      .appendField(
        new Blockly.FieldDropdown([
          ["IO9", "9"],
          ["IO10", "10"],
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

//Bluetooth

Blockly.Blocks["lekirbot_bluetooth_ready"] = {
  helpUrl: "http://arduino.cc/en/Reference/bluetooth",
  init: function () {
    this.setColour(warna);
    this.appendDummyInput()
      .appendField("lekirbot Bluetooth Data Ready?")
      .appendField(
        new Blockly.FieldImage("extensions/lekirbot/blocks/lekirbot//media/bth1.png", 64, 32)
      );
    this.setOutput(true, "Boolean");
    this.setTooltip(
      "Return Bluetooth ready/not (Boolean). Need Bluetooth connected to lekirbot"
    );
  },
};

Blockly.Blocks["lekirbot_bluetooth_data"] = {
  helpUrl: "http://arduino.cc/en/Reference/bluetooth",
  init: function () {
    this.setColour(warna);
    this.appendDummyInput()
      .appendField("Read lekirbot Bluetooth Data")
      .appendField(
        new Blockly.FieldImage("extensions/lekirbot/blocks/lekirbot//media/bth1.png", 64, 32)
      );
    this.setOutput(true, "String");
    this.setTooltip(
      "Return Bluetooth data in Char. Need Bluetooth connected to lekirbot"
    );
  },
};


Blockly.Blocks["lekirbot_sound"] = {
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

/*============ OLD PROGRAM ==============*/

Blockly.Blocks["lekirbot_path_finder"] = {
  helpUrl: "",
  init: function () {
    var lineoptions = [
      [
        {
          src: "extensions/lekirbot/blocks/lekirbot//media/blackonwhite.jpg",
          width: 60,
          height: 30,
          alt: "Black Line",
        },
        "1",
      ],
      [
        {
          src: "extensions/lekirbot/blocks/lekirbot//media/whiteonblack.jpg",
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
          src: "extensions/lekirbot/blocks/lekirbot//media/junctionleft.png",
          width: 60,
          height: 30,
          alt: "Left",
        },
        "2",
      ],
      [
        {
          src: "extensions/lekirbot/blocks/lekirbot//media/junctionright.png",
          width: 60,
          height: 30,
          alt: "Right",
        },
        "1",
      ],
      [
        {
          src: "extensions/lekirbot/blocks/lekirbot//media/middle.png",
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
          src: "extensions/lekirbot/blocks/lekirbot//media/turnleft.png",
          width: 60,
          height: 30,
          alt: "Turn Left",
        },
        "3",
      ],
      [
        {
          src: "extensions/lekirbot/blocks/lekirbot//media/turnright.png",
          width: 60,
          height: 30,
          alt: "Turn Right",
        },
        "2",
      ],
      [
        {
          src: "extensions/lekirbot/blocks/lekirbot//media/forward.png",
          width: 60,
          height: 30,
          alt: "Stop",
        },
        "1",
      ],
    ];

    this.setColour(warna);
    this.appendDummyInput()
      .appendField("lekirbot Path Finder")
      .appendField(
        new Blockly.FieldImage("extensions/lekirbot/blocks/lekirbot//media/robotimage.png", 64, 64)
      )
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
