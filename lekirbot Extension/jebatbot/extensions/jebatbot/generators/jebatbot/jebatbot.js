/**
 * Visual Blocks Language
 *
 * Copyright 2012 Fred Lin.
 * https://github.com/gasolin/BlocklyDuino
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Helper functions for generating seeeduino grove blocks.
 * @author gasolin@gmail.com (Fred Lin)
 */

goog.provide('Blockly.Arduino.jebatbot');

goog.require('Blockly.Arduino');



Blockly.Arduino.jebatbot_ext_button = function() {
  var button_pin = this.getFieldValue('buttonx');
Blockly.Arduino.definitions_['define_jebatbot'] = '#include <jebatbot.h>\n';
Blockly.Arduino.definitions_['define_extender'] = '#include <PCF8574.h>\n#include <Wire.h>\nPCF8574 pcf20(0x20);\n';
Blockly.Arduino.setups_['setup_input_extender'] = 'pcf20.begin();';
  Blockly.Arduino.definitions_['var_jebatbot'] = 'jebatbot bot((unsigned char[]) {  sens1,sens2,sens3,sens4,sens5} ,5, 10, QTR_NO_EMITTER_PIN);\n';


    var code = 'bitRead(pcf20.read8(),'+button_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.jebatbot_ext_led = function() {
  var dropdown_pin = this.getFieldValue('LEDx');
  var dropdown_stat = this.getFieldValue('STAT');
   Blockly.Arduino.definitions_['define_jebatbot'] = '#include <jebatbot.h>\n';
  Blockly.Arduino.definitions_['define_extender'] = '#include <PCF8574.h>\n#include <Wire.h>\nPCF8574 pcf20(0x20);\n';
  Blockly.Arduino.setups_['setup_input_extender'] = 'pcf20.begin();';
    Blockly.Arduino.definitions_['var_jebatbot'] = 'jebatbot bot((unsigned char[]) {  sens1,sens2,sens3,sens4,sens5} ,5, 10, QTR_NO_EMITTER_PIN);\n';

  var code = 'pcf20.write('+dropdown_pin+','+ dropdown_stat+');\n'
  return code;
};


Blockly.Arduino.jebatbot_ext_stopwatch_run = function() {
   Blockly.Arduino.definitions_['define_jebatbot'] = '#include <jebatbot.h>\n';
  Blockly.Arduino.definitions_['define_extender'] = '#include <PCF8574.h>\n#include <Wire.h>\nPCF8574 pcf20(0x20);\n';
  Blockly.Arduino.definitions_['define_stopwatch'] = 'double i_stopwatch = 0;\ndouble a_stopwatch =millis();\n double c_stopwatch =0;\nint statustimer_stopwatch=3;\n';
  
    Blockly.Arduino.definitions_['var_jebatbot'] = 'jebatbot bot((unsigned char[]) {  sens1,sens2,sens3,sens4,sens5} ,5, 10, QTR_NO_EMITTER_PIN);\n';

Blockly.Arduino.definitions_['define_jebatbot_oled'] = '#include "Adafruit_GFX.h"\n#include "Adafruit_SSD1306.h"\nAdafruit_SSD1306 display(128, 32, &Wire, 22);\n'; Blockly.Arduino.definitions_['define_jebatbot_stopwatch_function'] = "void timero(int statustimero){\n"+
 "if (statustimero==0)//start timer\n"+
 "{\n"+
 " a_stopwatch=millis();\n"+
 "statustimer_stopwatch=1;\n"+
 "}\n"+
 "if (statustimero==1)//timer runningx\n"+
 "{\n"+
 "c_stopwatch = millis();\n"+
 "i_stopwatch = (c_stopwatch - a_stopwatch) / 1000;\n"+
 "unsigned long seconds = i_stopwatch;\n"+
 "unsigned long minutes = seconds / 60;\n"+
 "unsigned long hours = minutes / 60;\n"+
 "unsigned long days = hours / 24;\n"+
 "int x=i_stopwatch;\n"+
 "x %= 1000;\n"+
 "seconds %= 60;\n"+
 "minutes %= 60;\n"+
 "hours %= 24;\n"+
 "int u = i_stopwatch; // i will be 12\n"+
 "float d = i_stopwatch - u; // d will be 0.345678\n"+
 "float micro=d+seconds;\n"+
 "display.clearDisplay();                       //clear display\n"+
 " display.setCursor(0,0);                       //set display params\n"+
 "if (minutes<10) display.print(\"0\");\n"+
 "display.print(minutes);\n"+
 "display.print(\":\");\n"+
 "if (micro<10) display.print('0');\n"+
 "display.print(micro);\n"+
 "display.display();                   \n"+
 "}\n"+
 "if (statustimero==2)//timer reset\n"+
 "{\n"+
 " display.clearDisplay();                       //clear display\n"+
 "display.setCursor(0,0);                       //set display params\n"+
 "display.println(\"00:00:00\");  \n"+
 "display.display();                            //show splash screen\n"+
 "}\n"+
 "if (statustimero==3)//stop timer\n"+
 "{\n"+
 "display.setCursor(0,0);                       //set display params\n"+
 "display.display();                            //show splash screen\n"+
 "}\n"+
 "}";
   Blockly.Arduino.setups_['setup_jebatbot_oled']='display.begin(SSD1306_SWITCHCAPVCC, 0x3C);\ndisplay.setTextSize(2);\ndisplay.setTextColor(WHITE);\n';
   
   Blockly.Arduino.setups_['setup_input_extender'] = 'pcf20.begin();';
  var code = 'timero(statustimer_stopwatch);\n'
  return code;
};

Blockly.Arduino.jebatbot_ext_stopwatch_control = function() {
  var stopwatch_status = this.getFieldValue('stopwatch');
   Blockly.Arduino.definitions_['define_jebatbot'] = '#include <jebatbot.h>\n';
  Blockly.Arduino.definitions_['define_extender'] = '#include <PCF8574.h>\n#include <Wire.h>\nPCF8574 pcf20(0x20);\n';
  Blockly.Arduino.definitions_['define_stopwatch'] = 'double i_stopwatch = 0;\ndouble a_stopwatch =millis();\n double c_stopwatch =0;\nint statustimer_stopwatch=3;\n';
  
    Blockly.Arduino.definitions_['var_jebatbot'] = 'jebatbot bot((unsigned char[]) {  sens1,sens2,sens3,sens4,sens5} ,5, 10, QTR_NO_EMITTER_PIN);\n';

Blockly.Arduino.definitions_['define_jebatbot_oled'] = '#include "Adafruit_GFX.h"\n#include "Adafruit_SSD1306.h"\nAdafruit_SSD1306 display(128, 32, &Wire, 22);\n';  Blockly.Arduino.definitions_['define_jebatbot_stopwatch_function'] = "void timero(int statustimero){\n"+
  "if (statustimero==0)//start timer\n"+
  "{\n"+
  " a_stopwatch=millis();\n"+
  "statustimer_stopwatch=1;\n"+
  "}\n"+
  "if (statustimero==1)//timer runningx\n"+
  "{\n"+
  "c_stopwatch = millis();\n"+
  "i_stopwatch = (c_stopwatch - a_stopwatch) / 1000;\n"+
  "unsigned long seconds = i_stopwatch;\n"+
  "unsigned long minutes = seconds / 60;\n"+
  "unsigned long hours = minutes / 60;\n"+
  "unsigned long days = hours / 24;\n"+
  "int x=i_stopwatch;\n"+
  "x %= 1000;\n"+
  "seconds %= 60;\n"+
  "minutes %= 60;\n"+
  "hours %= 24;\n"+
  "int u = i_stopwatch; // i will be 12\n"+
  "float d = i_stopwatch - u; // d will be 0.345678\n"+
  "float micro=d+seconds;\n"+
  "display.clearDisplay();                       //clear display\n"+
  " display.setCursor(0,0);                       //set display params\n"+
  "if (minutes<10) display.print(\"0\");\n"+
  "display.print(minutes);\n"+
  "display.print(\":\");\n"+
  "if (micro<10) display.print('0');\n"+
  "display.print(micro);\n"+
  "display.display();                   \n"+
  "}\n"+
  "if (statustimero==2)//timer reset\n"+
  "{\n"+
  " display.clearDisplay();                       //clear display\n"+
  "display.setCursor(0,0);                       //set display params\n"+
  "display.println(\"00:00:00\");  \n"+
  "display.display();                            //show splash screen\n"+
  "}\n"+
  "if (statustimero==3)//stop timer\n"+
  "{\n"+
  "display.setCursor(0,0);                       //set display params\n"+
  "display.display();                            //show splash screen\n"+
  "}\n"+
  "}";
Blockly.Arduino.setups_['setup_jebatbot_oled']='display.begin(SSD1306_SWITCHCAPVCC, 0x3C);\ndisplay.setTextSize(2);\ndisplay.setTextColor(WHITE);\n';
   // Blockly.Arduino.loops_['loop_jebatbot_stopwatch']='timero(statustimer_stopwatch);\n';
   
   Blockly.Arduino.setups_['setup_input_extender'] = 'pcf20.begin();';
  var code = 'statustimer_stopwatch= '+stopwatch_status+';\n'
  return code;
};




Blockly.Arduino.jebatbot_ext_buzzer = function() {
  var dropdown_stat = this.getFieldValue('STAT');
   Blockly.Arduino.definitions_['define_jebatbot'] = '#include <jebatbot.h>\n';
  Blockly.Arduino.definitions_['define_extender'] = '#include <PCF8574.h>\n#include <Wire.h>\nPCF8574 pcf20(0x20);\n';
  Blockly.Arduino.setups_['setup_input_extender'] = 'pcf20.begin();';
    Blockly.Arduino.definitions_['var_jebatbot'] = 'jebatbot bot((unsigned char[]) {  sens1,sens2,sens3,sens4,sens5} ,5, 10, QTR_NO_EMITTER_PIN);\n';

  var code = 'pcf20.write(7,'+ dropdown_stat+');\n'
  return code;
};

//temparory
Blockly.Arduino['jebatbot_wifi_upload']=function(block){
	var reseau=block.getFieldValue("SSID");
	var cle=block.getFieldValue("KEY");
	var hostname=block.getFieldValue("hostname");
	Blockly.Arduino.includes_["jebat_ota"] = "#define ESP32_RTOS \n#include <OTA.h>\n";
	Blockly.Arduino.definitions_["jebat"] = "";
	  Blockly.Arduino.setups_['serial_begin_arduino'] = 'Serial.begin(9600);\n' ;
    Blockly.Arduino.setups_["jebat"] = 'setupOTA("'+hostname+'","'+reseau+'","'+cle+'");\n';
	
	var code = "\#ifdef defined(ESP32_RTOS) && defined(ESP32)\n\#else // If you do not use FreeRTOS, you have to regulary call the handle method.\nArduinoOTA.handle();\n\#endif";
	return code ;
};


Blockly.Arduino.jebatbot_WS2812B_grid = function() {
  var pin_ledrgb = 16;
  Blockly.Arduino.definitions_['define_jebatbot'] = '#include <jebatbot.h>\n';
  Blockly.Arduino.definitions_['var_jebatbot'] = 'jebatbot bot((unsigned char[]) {  sens1,sens2,sens3,sens4,sens5} ,5, 10, QTR_NO_EMITTER_PIN);\n';


  var code = '';
  for (var i=0; i<5; i++) {
	if (this.getFieldValue('Pixel' + i) != 'rgb(255, 255, 255)') {
		var rgbHexa = this.getFieldValue('Pixel' + i).replace('#', '');
		code += 'bot.setPixyColor('+ i +', 0x' + rgbHexa + ');\n';
	}
  };
  return code;
};

Blockly.Arduino.jebatbot_rgb_brightness = function() {
    var percent = Blockly.Arduino.valueToCode(this, 'percent', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['define_jebatbot'] = '#include <jebatbot.h>\n';
  Blockly.Arduino.definitions_['var_jebatbot'] = 'jebatbot bot((unsigned char[]) {  sens1,sens2,sens3,sens4,sens5} ,5, 10, QTR_NO_EMITTER_PIN);\n';

  var code = '';
  code += 'bot.brightnessPixyColor('+ percent +');\n';

  return code;
};


Blockly.Arduino.jebatbot_led = function () {
    var dropdown_pin = this.getFieldValue('LEDx');
    var dropdown_color = this.getFieldValue('STAT');
    Blockly.Arduino.definitions_['define_jebatbot'] = '#include <jebatbot.h>\n';
    Blockly.Arduino.definitions_['var_jebatbot'] = 'jebatbot bot((unsigned char[]) {  sens1,sens2,sens3,sens4,sens5} ,5, 10, QTR_NO_EMITTER_PIN);\n';
    
		var rgbHexa = this.getFieldValue('color').replace('#', '');
// 		code += 'bot.setPixyColor('+ i +', 0x' + rgbHexa + ');\n'
	
	
	
    var code = 'bot.setPixyColor(' + dropdown_pin + ',0x' + rgbHexa + ');\n';
    return code;
};

Blockly.Arduino.jebatbot_led_clear = function () {
    Blockly.Arduino.definitions_['define_jebatbot'] = '#include <jebatbot.h>\n';
    Blockly.Arduino.definitions_['var_jebatbot'] = 'jebatbot bot((unsigned char[]) {  sens1,sens2,sens3,sens4,sens5} ,5, 10, QTR_NO_EMITTER_PIN);\n';
    
// 		var rgbHexa = this.getFieldValue('color').replace('#', '');
// 		code += 'bot.setPixyColor('+ i +', 0x' + rgbHexa + ');\n'
	
	
	
    var code = 'bot.clearPixyColor();\n'
    return code;
};

Blockly.Arduino.jebatbot_megablink = function () {
    var value_delay = Blockly.Arduino.valueToCode(this, 'DELAY', Blockly.Arduino.ORDER_ATOMIC);
            var r = Blockly.Arduino.valueToCode(this, 'R', Blockly.Arduino.ORDER_ATOMIC);

    var g = Blockly.Arduino.valueToCode(this, 'G', Blockly.Arduino.ORDER_ATOMIC);

    var b = Blockly.Arduino.valueToCode(this, 'B', Blockly.Arduino.ORDER_ATOMIC);

    Blockly.Arduino.definitions_['define_jebatbot'] = '#include <jebatbot.h>\n'; //pin 16 5 RGB
    
    Blockly.Arduino.definitions_['var_jebatbot'] = 'jebatbot bot((unsigned char[]) {  sens1,sens2,sens3,sens4,sens5} ,5, 10, QTR_NO_EMITTER_PIN);\n';
    var code = 'bot.knightrider(' + value_delay + ','+r+','+g+','+b+');\n'
    return code;
};

Blockly.Arduino.jebatbot_knightrider = function () {
    var value_delay = Blockly.Arduino.valueToCode(this, 'DELAY', Blockly.Arduino.ORDER_ATOMIC);
            var r = Blockly.Arduino.valueToCode(this, 'R', Blockly.Arduino.ORDER_ATOMIC);

    var g = Blockly.Arduino.valueToCode(this, 'G', Blockly.Arduino.ORDER_ATOMIC);

    var b = Blockly.Arduino.valueToCode(this, 'B', Blockly.Arduino.ORDER_ATOMIC);

    Blockly.Arduino.definitions_['define_jebatbot'] = '#include <jebatbot.h>\n'; //pin 16 5 RGB
    
    Blockly.Arduino.definitions_['var_jebatbot'] = 'jebatbot bot((unsigned char[]) {  sens1,sens2,sens3,sens4,sens5} ,5, 10, QTR_NO_EMITTER_PIN);\n';
    var code = 'bot.knightrider(' + value_delay + ','+r+','+g+','+b+');\n'
    return code;
};




Blockly.Arduino.jebatbot_motor_steer = function() {
  var dropdown_dir = this.getFieldValue('DIR');
    var value_speed = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);

 Blockly.Arduino.definitions_['define_jebatbot'] = '#include <jebatbot.h>\n';
    Blockly.Arduino.definitions_['var_jebatbot'] = 'jebatbot bot((unsigned char[]) {  sens1,sens2,sens3,sens4,sens5} ,5, 10, QTR_NO_EMITTER_PIN);\n';
   var code = 'bot.motorsteer("'+dropdown_dir+'",'+ value_speed+');\n'
  return code;
};

Blockly.Arduino.jebatbot_motor_stop = function() {
  var dropdown_dir = this.getFieldValue('DIR');
    var value_speed = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);

 Blockly.Arduino.definitions_['define_jebatbot'] = '#include <jebatbot.h>\n';
    Blockly.Arduino.definitions_['var_jebatbot'] = 'jebatbot bot((unsigned char[]) {  sens1,sens2,sens3,sens4,sens5} ,5, 10, QTR_NO_EMITTER_PIN);\n';
   var code = 'bot.motorsteer("STOP",0);\n'
  return code;
};

Blockly.Arduino.jebatbot_motor_tank = function() {
  var dropdown_dirl = this.getFieldValue('DIRL');
  var dropdown_dirr = this.getFieldValue('DIRR');
      var value_speedl = Blockly.Arduino.valueToCode(this, 'SPEEDL', Blockly.Arduino.ORDER_ATOMIC);
      var value_speedr = Blockly.Arduino.valueToCode(this, 'SPEEDR', Blockly.Arduino.ORDER_ATOMIC);

 Blockly.Arduino.definitions_['define_jebatbot'] = '#include <jebatbot.h>\n';
    Blockly.Arduino.definitions_['var_jebatbot'] = 'jebatbot bot((unsigned char[]) {  sens1,sens2,sens3,sens4,sens5} ,5, 10, QTR_NO_EMITTER_PIN);\n';
   var code = 'bot.motortank("'+dropdown_dirl+'",'+ value_speedl+',"'+dropdown_dirr+'",'+ value_speedr+');\n'
  return code;
};


Blockly.Arduino.jebatbot_ultrasonic_read = function() {

	  var trig= 5;
	  var echo= 26;

  Blockly.Arduino.setups_['setup_input_' + trig] = 'pinMode('+ trig +', OUTPUT);';
  Blockly.Arduino.setups_['setup_input_' + echo] = 'pinMode('+ echo +', INPUT);';


Blockly.Arduino.definitions_['define_jebatbot_ultrasonic'] = "int jebatbot_ultrasonic(byte trig,byte echo)\n"+
    "{\n"+
    "  digitalWrite(trig,LOW);\n"+ //NBR sens was reversed on left motor... so I added a not (!)
    "  delayMicroseconds(2);\n"+
    "  digitalWrite(trig,HIGH);\n"+
    "  delayMicroseconds(10);\n"+
    "  digitalWrite(trig,LOW);\n"+
    "  long duration= pulseIn(echo,HIGH);\n"+
    "  int distance= duration*0.034/2;\n"+
    " return distance;"+
    "}\n";
    

  	var code='jebatbot_ultrasonic('+trig+','+echo+')';


  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.jebatbot_linesensor = function() {
  var dropdown_sensor = this.getFieldValue('sensorx');
 Blockly.Arduino.definitions_['define_jebatbot'] = '#include <jebatbot.h>\n';
    Blockly.Arduino.definitions_['var_jebatbot'] = 'jebatbot bot((unsigned char[]) {  sens1,sens2,sens3,sens4,sens5} ,5, 10, QTR_NO_EMITTER_PIN);\n';
    var code = 'bot.ir_sense('+dropdown_sensor+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.jebatbot_calibrate = function() {

 Blockly.Arduino.definitions_['define_jebatbot'] = '#include <jebatbot.h>\n';
    Blockly.Arduino.definitions_['var_jebatbot'] = 'jebatbot bot((unsigned char[]) {  sens1,sens2,sens3,sens4,sens5} ,5, 10, QTR_NO_EMITTER_PIN);\n';

    Blockly.Arduino.setups_['jebatbot_motor_lib'] = 'bot.Motor(4,23,2,17);';
          // get the device ID, this is just a test to see if we're connected
  

  	var code='bot.calibrate();\n';

  return code;
};

Blockly.Arduino.jebatbot_turn_at_center = function() {


  var direction = this.getFieldValue('DIR');
  	  var linetype = this.getFieldValue('line');
  	  
        var base = Blockly.Arduino.valueToCode(this, 'speed', Blockly.Arduino.ORDER_ATOMIC);
        var sensorc = 3500;

      
 Blockly.Arduino.definitions_['define_jebatbot'] = '#include <jebatbot.h>\n';
    Blockly.Arduino.definitions_['var_jebatbot'] = 'jebatbot bot((unsigned char[]) {  sens1,sens2,sens3,sens4,sens5} ,5, 10, QTR_NO_EMITTER_PIN);\n';
    Blockly.Arduino.setups_['jebatbot_motor_lib']='bot.Motor(4,23,2,17);';
          // get the device ID, this is just a test to see if we're connected
     

  	var code='bot.turn_at_center('+direction+', '+base+','+sensorc+', '+linetype+');\n';

  return code;
};


Blockly.Arduino.jebatbot_tracer = function() {


	  var linetype = this.getFieldValue('line');
      var leftright = Blockly.Arduino.valueToCode(this, 'LeftRight', Blockly.Arduino.ORDER_ATOMIC);
      var base = 255;//maxSpeed
      var turn = 100;//not in use
      var kp = Blockly.Arduino.valueToCode(this, 'Kp', Blockly.Arduino.ORDER_ATOMIC);
      var kd = Blockly.Arduino.valueToCode(this, 'Kd', Blockly.Arduino.ORDER_ATOMIC);
      var sensor = 100;///not used i think , FKCH
      
 Blockly.Arduino.definitions_['define_jebatbot'] = '#include <jebatbot.h>\n';
    Blockly.Arduino.definitions_['var_jebatbot'] = 'jebatbot bot((unsigned char[]) {  sens1,sens2,sens3,sens4,sens5} ,5, 10, QTR_NO_EMITTER_PIN);\n';
    Blockly.Arduino.setups_['jebatbot_motor_lib']='bot.Motor(4,23,2,17);';
          // get the device ID, this is just a test to see if we're connected
     

  	var code='bot.pid_line('+leftright+', '+leftright+', '+turn+', '+base+', '+kp+','+ kd+', '+linetype+', '+sensor+');\n';

  return code;
};

Blockly.Arduino.jebatbot_tillJunction = function() {

      var linef = this.getFieldValue('line');
	  var junction = this.getFieldValue('junction');
      var leftright = Blockly.Arduino.valueToCode(this, 'LeftRight', Blockly.Arduino.ORDER_ATOMIC);
      var action=this.getFieldValue('action');
      var turnspeed = Blockly.Arduino.valueToCode(this, 'turnspeed', Blockly.Arduino.ORDER_ATOMIC);
	  
	  if (junction==11) junction =1;
	  if (junction==22) junction =2;
	  
      var kp = Blockly.Arduino.valueToCode(this, 'Kp', Blockly.Arduino.ORDER_ATOMIC);
      var kd = Blockly.Arduino.valueToCode(this, 'Kd', Blockly.Arduino.ORDER_ATOMIC);
     var forwarddelay = Blockly.Arduino.valueToCode(this, 'forwarddelay', Blockly.Arduino.ORDER_ATOMIC);
     var turndelay = Blockly.Arduino.valueToCode(this, 'turndelay', Blockly.Arduino.ORDER_ATOMIC);

      var maxspeed = 255;

      
 Blockly.Arduino.definitions_['define_jebatbot'] = '#include <jebatbot.h>\n';
    Blockly.Arduino.definitions_['var_jebatbot'] = 'jebatbot bot((unsigned char[]) {  sens1,sens2,sens3,sens4,sens5} ,5, 10, QTR_NO_EMITTER_PIN);\n';
 
    Blockly.Arduino.setups_['jebatbot_motor_lib'] = 'bot.Motor(4,23,2,17);';
          // get the device ID, this is just a test to see if we're connected

 if (linef==0)
	var code='bot.jebatFinderBlack('+junction+','+action+','+leftright+','+turnspeed+','+kp+','+ kd+','+forwarddelay+','+turndelay+');\n';
else if (linef==1)
	var code='bot.jebatFinderWhite('+junction+','+action+','+leftright+','+turnspeed+', '+kp+','+ kd+','+forwarddelay+','+turndelay+');\n';
  
  return code;
};


Blockly.Arduino.jebatbot_ldr = function() {
  Blockly.Arduino.setups_['setup_input_ldr_mini'] = 'pinMode(32, INPUT);';

    var code = 'analogRead(32)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.jebatbot_button = function() {
  Blockly.Arduino.setups_['setup_input_button_mini'] = 'pinMode(0, INPUT);';

    var code = 'digitalRead(0)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.jebatbot_path_finder = function() {

      var linef = this.getFieldValue('line');
	  var junction = this.getFieldValue('junction');
	  var action = this.getFieldValue('action');
      var leftright = Blockly.Arduino.valueToCode(this, 'LeftRight', Blockly.Arduino.ORDER_ATOMIC);
      var turn = Blockly.Arduino.valueToCode(this, 'Turn', Blockly.Arduino.ORDER_ATOMIC);
      var kp = Blockly.Arduino.valueToCode(this, 'Kp', Blockly.Arduino.ORDER_ATOMIC);
      var kd = Blockly.Arduino.valueToCode(this, 'Kd', Blockly.Arduino.ORDER_ATOMIC);
      var sensorthreshold = Blockly.Arduino.valueToCode(this, 'Sensor', Blockly.Arduino.ORDER_ATOMIC);
      var fdelay = Blockly.Arduino.valueToCode(this, 'FDelay', Blockly.Arduino.ORDER_ATOMIC);
      var tdelay = Blockly.Arduino.valueToCode(this, 'TDelay', Blockly.Arduino.ORDER_ATOMIC);

      
 Blockly.Arduino.definitions_['define_jebatbot'] = '#include <jebatbot.h>\n';
    Blockly.Arduino.definitions_['var_jebatbot'] = 'jebatbot bot((unsigned char[]) {  sens1,sens2,sens3,sens4,sens5} ,5, 10, QTR_NO_EMITTER_PIN);\n';
 
    Blockly.Arduino.setups_['jebatbot_motor_lib'] = 'bot.Motor(4,23,2,17);';
          // get the device ID, this is just a test to see if we're connected
     

 if (linef==0)
	var code='bot.jebatFinderB('+junction+','+action+','+leftright+', '+leftright+', '+turn+', 100, '+kp+','+ kd+', '+sensorthreshold+','+fdelay+','+tdelay+');\n';
else if (linef==1)
	var code='bot.jebatFinderW('+junction+','+action+','+leftright+', '+leftright+', '+turn+', 100, '+kp+','+ kd+', '+sensorthreshold+','+fdelay+','+tdelay+');\n';
  
  

  return code;
};



Blockly.Arduino.jebatbot_dtracer = function() {



      var leftright = Blockly.Arduino.valueToCode(this, 'LeftRight', Blockly.Arduino.ORDER_ATOMIC);
      var turn = 100;
      var kp = Blockly.Arduino.valueToCode(this, 'Kp', Blockly.Arduino.ORDER_ATOMIC);
      var kd = Blockly.Arduino.valueToCode(this, 'Kd', Blockly.Arduino.ORDER_ATOMIC);
      var sensor = 100;
      var linef = this.getFieldValue('line');
      var delay = Blockly.Arduino.valueToCode(this, 'Delay', Blockly.Arduino.ORDER_ATOMIC);

      
 Blockly.Arduino.definitions_['define_jebatbot'] = '#include <jebatbot.h>\n';
    Blockly.Arduino.definitions_['var_jebatbot'] = 'jebatbot bot((unsigned char[]) {  sens1,sens2,sens3,sens4,sens5} ,5, 10, QTR_NO_EMITTER_PIN);\n';
 
    Blockly.Arduino.setups_['jebatbot_motor_lib'] = 'bot.Motor(4,23,2,17);';


  	var code='bot.jebatDtracer('+leftright+', '+leftright+', '+turn+', '+kp+','+ kd+', '+sensor+','+linef+','+delay+');\n';

  return code;
};


Blockly.Arduino.jebatbot_findline = function() {



      var leftright = Blockly.Arduino.valueToCode(this, 'LeftRight', Blockly.Arduino.ORDER_ATOMIC);
     var sensor = Blockly.Arduino.valueToCode(this, 'Sensor', Blockly.Arduino.ORDER_ATOMIC);
      var linef = this.getFieldValue('line');
      
      
 Blockly.Arduino.definitions_['define_jebatbot'] = '#include <jebatbot.h>\n';
    Blockly.Arduino.definitions_['var_jebatbot'] = 'jebatbot bot((unsigned char[]) {  sens1,sens2,sens3,sens4,sens5} ,5, 10, QTR_NO_EMITTER_PIN);\n';
     Blockly.Arduino.setups_['jebat__minimotor_lib']='bot.Motor(4,23,2,17);';

	 if (linef==0)
  	var code='bot.jebatflineW('+leftright+', '+leftright+',  '+sensor+','+linef+');\n';
  	else if (linef==1)
  	 var code='bot.jebatflineB('+leftright+', '+leftright+',  '+sensor+','+linef+');\n';


  return code;
};



Blockly.Arduino.jebatbot_bluetooth_ready = function() {



Blockly.Arduino.definitions_['define_jebatbot_bluetooth'] = "#include <SoftwareSerial.h>\n SoftwareSerial jebatbotbluetooth(0, 1); \n char BTdata; // variable for bluetooth";


     Blockly.Arduino.setups_['jebatbot_bluetooth']='jebatbotbluetooth.begin(9600);\n';
          // get the device ID, this is just a test to see if we're connected
  
    

  	var code='jebatbotbluetooth.available()';


  return [code, Blockly.Arduino.ORDER_ATOMIC];
};



Blockly.Arduino.jebatbot_bluetooth_data = function() {



Blockly.Arduino.definitions_['define_jebatbot_bluetooth'] = "#include <SoftwareSerial.h>\nSoftwareSerial jebatbotbluetooth(0, 1); \n // variable for bluetooth";


     Blockly.Arduino.setups_['jebatbot_bluetooth']='JebatMinibluetooth.begin(9600);\n';
          // get the device ID, this is just a test to see if we're connected
  
    

  	var code='JebatMinibluetooth.read()';

  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.jebatbot_colorsensor = function() {





Blockly.Arduino.definitions_['define_jebatbot_colorsensor'] = "#include <Wire.h>\n"+
"#include <Math.h>\n"+
"byte i2cWriteBuffer[10];\n"+
"byte i2cReadBuffer[10];\n"+
"#define SensorAddressWrite 0x29 // \n"+
"#define SensorAddressRead 0x29 // \n"+
"#define EnableAddress 0xa0 // register address + command bits \n"+
"#define ATimeAddress 0xa1 // register address + command bits\n"+
"#define WTimeAddress 0xa3 // register address + command bits\n"+
"#define ConfigAddress 0xad // register address + command bits\n"+
"#define ControlAddress 0xaf // register address + command bits\n"+
"#define IDAddress 0xb2 // register address + command bits\n"+
"#define ColorAddress 0xb4 // register address + command bits\n";



Blockly.Arduino.definitions_['define_jebatbot_colorsensor_function'] = "void Writei2cRegisters(byte numberbytes, byte command)\n"+
"{\n"+
"    byte i = 0;\n"+
"	Wire.beginTransmission(SensorAddressWrite);   // Send address with Write bit set\n"+
"    Wire.write(command);                          // Send command, normally the register address \n"+
"    for (i=0;i<numberbytes;i++)                       // Send data \n"+
"      Wire.write(i2cWriteBuffer[i]);\n"+
"    Wire.endTransmission();\n"+
"    delayMicroseconds(100);      // allow some time for bus to settle      \n"+
"}\n"+
"byte Readi2cRegisters(int numberbytes, byte command)\n"+
"{\n"+
"   byte i = 0;\n"+
"    Wire.beginTransmission(SensorAddressWrite);   // Write address of read to sensor\n"+
"    Wire.write(command);\n"+
"    Wire.endTransmission();\n"+
"    delayMicroseconds(100);\n"+
"    Wire.requestFrom(SensorAddressRead,numberbytes);   // read data\n"+
"    for(i=0;i<numberbytes;i++)\n"+
"      i2cReadBuffer[i] = Wire.read();\n"+
"    Wire.endTransmission();   \n"+
"    delayMicroseconds(100);      // allow some time for bus to settle      \n"+
"}  \n"+
"void init_TCS34725(void)\n"+
"{\n"+
"  i2cWriteBuffer[0] = 0x10;\n"+
"  Writei2cRegisters(1,ATimeAddress);    // RGBC timing is 256 - contents x 2.4mS =  \n"+
"  i2cWriteBuffer[0] = 0x00;\n"+
"  Writei2cRegisters(1,ConfigAddress);   // Can be used to change the wait time\n"+
"  i2cWriteBuffer[0] = 0x00;\n"+
"  Writei2cRegisters(1,ControlAddress);  // RGBC gain control\n"+
"  i2cWriteBuffer[0] = 0x03;\n"+
"  Writei2cRegisters(1,EnableAddress);    // enable ADs and oscillator for sensor  \n"+
"}\n"+
"void get_TCS34725ID(void)\n"+
"{\n"+
"  Readi2cRegisters(1,IDAddress);\n"+
"}\n"+
"int get_green()\n"+
"{\n"+
"  unsigned int green_color = 0;\n"+
"  Readi2cRegisters(8,ColorAddress);\n"+
"  green_color = (unsigned int)(i2cReadBuffer[5]<<8) + (unsigned int)i2cReadBuffer[4];\n"+
"int  g=map(green_color,0,65535,0,255);\n"+
"return g;\n"+
"}  \n"+
"int get_blue()\n"+
"{\n"+
"  unsigned int blue_color = 0;\n"+
"  Readi2cRegisters(8,ColorAddress);\n"+
"  blue_color = (unsigned int)(i2cReadBuffer[7]<<8) + (unsigned int)i2cReadBuffer[6];\n"+
"int  b=map(blue_color,0,65535,0,255);\n"+
"return b;\n"+
"}  \n"+
"int get_red()\n"+
"{\n"+
"  unsigned int red_color = 0;\n"+
"  Readi2cRegisters(8,ColorAddress);\n"+
"  red_color = (unsigned int)(i2cReadBuffer[3]<<8) + (unsigned int)i2cReadBuffer[2];\n"+
"int  r=map(red_color,0,65535,0,255);\n"+
"return r;\n"+
"}  \n"+
"int get_clear()\n"+
"{\n"+
"  unsigned int clear_color = 0;\n"+
"  Readi2cRegisters(8,ColorAddress);\n"+
"  clear_color = (unsigned int)(i2cReadBuffer[1]<<8) + (unsigned int)i2cReadBuffer[0];\n"+
"int  clrr=map(clear_color,0,65535,0,255);\n"+
"return clrr;\n"+
"}\n"+
"char color_detected()\n"+
"{ \n"+
" int red_color = get_red();\n"+
"    int green_color = get_green();\n"+
"    int blue_color = get_blue();\n"+
"  char co;\n"+
"  if((red_color>blue_color) && (red_color>green_color))\n"+
"    co='r';\n"+
"  else if((green_color>blue_color) && (green_color>red_color))\n"+
"    co='g';\n"+
"  else if((blue_color>red_color) && (blue_color>green_color))\n"+
"    co='b';\n"+
"  else\n"+
"    co='0';\n"+
"  return co;\n"+
"}\n";


     Blockly.Arduino.setups_['color_sensor']='Wire.begin();\n init_TCS34725();\n get_TCS34725ID();';
          // get the device ID, this is just a test to see if we're connected
  
    

  	var code='color_detected()';


  return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.jebatbot_oled_clearwritedisplay = function() {


  var texti = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0'

      
Blockly.Arduino.definitions_['define_jebatbot_oled'] = '#include "Adafruit_GFX.h"\n#include "Adafruit_SSD1306.h"\nAdafruit_SSD1306 display(128, 32, &Wire, 22);\n';
     Blockly.Arduino.setups_['jebatbot_oled']='display.begin(SSD1306_SWITCHCAPVCC, 0x3C);\n';
          // get the device ID, this is just a test to see if we're connected
     

    var code='display.clearDisplay();\ndisplay.print('+texti+');\ndisplay.display();\n';

  return code;
};


Blockly.Arduino.jebatbot_oled_write = function() {


  var texti = Blockly.Arduino.valueToCode(this, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0'

      
Blockly.Arduino.definitions_['define_jebatbot_oled'] = '#include "Adafruit_GFX.h"\n#include "Adafruit_SSD1306.h"\nAdafruit_SSD1306 display(128, 32, &Wire, 22);\n';
     Blockly.Arduino.setups_['jebatbot_oled']='display.begin(SSD1306_SWITCHCAPVCC, 0x3C);\n';
          // get the device ID, this is just a test to see if we're connected
     

  	var code='display.print('+texti+');\n';

  return code;
};


Blockly.Arduino.jebatbot_oled_clear = function() {



      
Blockly.Arduino.definitions_['define_jebatbot_oled'] = '#include "Adafruit_GFX.h"\n#include "Adafruit_SSD1306.h"\nAdafruit_SSD1306 display(128, 32, &Wire, 22);\n';
     Blockly.Arduino.setups_['jebatbot_oled']='display.begin(SSD1306_SWITCHCAPVCC, 0x3C);\n';
          // get the device ID, this is just a test to see if we're connected
     

  	var code='display.clearDisplay();\n';

  return code;
};

Blockly.Arduino.jebatbot_oled_display = function() {



      
Blockly.Arduino.definitions_['define_jebatbot_oled'] = '#include "Adafruit_GFX.h"\n#include "Adafruit_SSD1306.h"\nAdafruit_SSD1306 display(128, 32, &Wire, 22);\n';
     Blockly.Arduino.setups_['jebatbot_oled']='display.begin(SSD1306_SWITCHCAPVCC, 0x3C);\n';
          // get the device ID, this is just a test to see if we're connected
     

  	var code='display.display();\n';

  return code;
};

Blockly.Arduino.jebatbot_oled_color = function() {


	  var colord = this.getFieldValue('colori');

      
Blockly.Arduino.definitions_['define_jebatbot_oled'] = '#include "Adafruit_GFX.h"\n#include "Adafruit_SSD1306.h"\nAdafruit_SSD1306 display(128, 32, &Wire, 22);\n';
     Blockly.Arduino.setups_['jebatbot_oled']='display.begin(SSD1306_SWITCHCAPVCC, 0x3C);\n';
          // get the device ID, this is just a test to see if we're connected
     

  	var code='display.setTextColor('+colord+');\n';

  return code;
};

Blockly.Arduino.jebatbot_oled_size = function() {


      var size = Blockly.Arduino.valueToCode(this, 'size', Blockly.Arduino.ORDER_ATOMIC);

      
Blockly.Arduino.definitions_['define_jebatbot_oled'] = '#include "Adafruit_GFX.h"\n#include "Adafruit_SSD1306.h"\nAdafruit_SSD1306 display(128, 32, &Wire, 22);\n';
     Blockly.Arduino.setups_['jebatbot_oled']='display.begin(SSD1306_SWITCHCAPVCC, 0x3C);\n';
          // get the device ID, this is just a test to see if we're connected
     

  	var code='display.setTextSize('+size+');\n';

  return code;
};

Blockly.Arduino.jebatbot_oled_cursor = function() {

      var x = Blockly.Arduino.valueToCode(this, 'x', Blockly.Arduino.ORDER_ATOMIC);
      var y = Blockly.Arduino.valueToCode(this, 'y', Blockly.Arduino.ORDER_ATOMIC);

	
      
Blockly.Arduino.definitions_['define_jebatbot_oled'] = '#include "Adafruit_GFX.h"\n#include "Adafruit_SSD1306.h"\nAdafruit_SSD1306 display(128, 32, &Wire, 22);\n';
     Blockly.Arduino.setups_['jebatbot_oled']='display.begin(SSD1306_SWITCHCAPVCC, 0x3C);\n';
          // get the device ID, this is just a test to see if we're connected
     

  	var code='display.setCursor('+x+','+y+');\n';

  return code;
};

Blockly.Arduino.jebatbot_sound = function() {


	  var sound = this.getFieldValue('sound');

      
Blockly.Arduino.definitions_['define_jebatbot_sound'] = "#define SPEAKER   12\n"+
"void chirp() {  // Bird chirp\n"+
"  for(uint8_t i=200; i>180; i--)\n"+
"     playTone(i,9);\n"+
"}\n"+
" \n"+
"void meow() {  \n"+
"  uint16_t i;\n"+
"  playTone(5100,50);       \n"+
"  playTone(394,180);       \n"+
"  for(i=990; i<1022; i+=2) \n"+
"     playTone(i,8);\n"+
"  playTone(5100,40);       \n"+
"}\n"+
" \n"+
"void meow2() {  \n"+
"  uint16_t i;\n"+
"  playTone(5100,55);       \n"+
"  playTone(394,170);     \n"+
"  delay(30);              \n"+
"  for(i=330; i<360; i+=2)  \n"+
"     playTone(i,10);\n"+
"  playTone(5100,40);       \n"+
"}\n"+
" \n"+
"void mew() {  // cat mew\n"+
"  uint16_t i;\n"+
"  playTone(5100,55);       \n"+
"  playTone(394,130);      \n"+
"  playTone(384,35);        \n"+
"  playTone(5100,40);     \n"+
"}\n"+
" \n"+
"void ruff() {   // dog ruff\n"+
"  uint16_t i;\n"+
"  for(i=890; i<910; i+=2)    \n"+
"     playTone(i,3);\n"+
"  playTone(1664,150);        \n"+
"  playTone(12200,70);      \n"+
"}\n"+
" \n"+
"void arf() {    // dog arf\n"+
"  uint16_t i;\n"+
"  playTone(890,25);        \n"+
"  for(i=890; i<910; i+=2)  \n"+
"     playTone(i,5);\n"+
"  playTone(4545,80);      \n"+
"  playTone(12200,70);      \n"+
"}\n"+
" \n"+
"// play tone on a piezo speaker: tone shorter values produce higher frequencies\n"+
"//  which is opposite beep() but avoids some math delay - similar to code by Erin Robotgrrl\n"+
" \n"+
"void playTone(uint16_t tone1, uint16_t duration) {\n"+
"  if(tone1 < 50 || tone1 > 15000) return;  // these do not play on a piezo\n"+
"  for (long i = 0; i < duration * 1000L; i += tone1 * 2) {\n"+
"     digitalWrite(SPEAKER, HIGH);\n"+
"     delayMicroseconds(tone1);\n"+
"     digitalWrite(SPEAKER, LOW);\n"+
"     delayMicroseconds(tone1);\n"+
"  }     \n"+
"}\n";
     Blockly.Arduino.setups_['jebatbot_sound']='  pinMode(SPEAKER,OUTPUT);  //\n';
          // get the device ID, this is just a test to see if we're connected
     

  	var code=sound+'();\n';

  return code;
};

Blockly.Arduino.jebatbot_servo_move = function() {
  var dropdown_pin = this.getFieldValue('port');
  var delayx = Blockly.Arduino.valueToCode(this, 'delayx', Blockly.Arduino.ORDER_ATOMIC);
  var value_degree = Blockly.Arduino.valueToCode(this, 'DEGREE', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>\n';
  Blockly.Arduino.definitions_['var_servo' + dropdown_pin] = 'Servo servo_' + dropdown_pin + ';\n';
  var codea= 'servo_' + dropdown_pin + '.attach(' + dropdown_pin + ');\n';
  var codeb = 'servo_' + dropdown_pin + '.write(' + value_degree + ');\n';
  var codec = 'delay('+delayx+');\n';
  var coded = 'servo_' + dropdown_pin + '.detach();\n';
  code= codea+codeb+codec+coded;
  return code;
};

Blockly.Arduino.jebatbot_gripper = function() {
  var dropdown_pin = this.getFieldValue('port');
  var value_degree = Blockly.Arduino.valueToCode(this, 'GRIP', Blockly.Arduino.ORDER_ATOMIC);
  Blockly.Arduino.definitions_['define_servo'] = '#include <Servo.h>\n';
  Blockly.Arduino.definitions_['var_servo' + dropdown_pin] = 'Servo servo_' + dropdown_pin + ';\n';
  var codea= 'servo_' + dropdown_pin + '.attach(' + dropdown_pin + ');\n';
  var codeb = 'servo_' + dropdown_pin + '.write(' + (value_degree/2) + ');\n';
  var codec = 'delay(1000);\n';
  var coded = 'servo_' + dropdown_pin + '.detach();\n';
  code= codea+codeb+codec+coded;
  return code;
};
