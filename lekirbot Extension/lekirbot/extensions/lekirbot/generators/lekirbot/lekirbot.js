
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

goog.provide('Blockly.Arduino.lekirbot');
goog.require('Blockly.Arduino');

//LED Output

Blockly.Arduino.lekirbot_led = function() {
	var dropdown_pin = this.getFieldValue('LEDx');
	var dropdown_stat = this.getFieldValue('STAT');
	Blockly.Arduino.definitions_['define_lekirbot'] = '#include <lekirbot.h>\n';
	Blockly.Arduino.definitions_['var_lekirbot'] = 'lekirbot bot((unsigned char[]) { sens1, sens2, sens3, sens4, sens5} ,5, 4, QTR_NO_EMITTER_PIN);\n';
	var code = 'bot.LED('+dropdown_pin+',"'+ dropdown_stat+'");\n'
	return code;
};

Blockly.Arduino.lekirbot_ext_led = function() {
	var dropdown_pin = this.getFieldValue('LEDx');
	var dropdown_stat = this.getFieldValue('STAT');
	Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>\n';
	Blockly.Arduino.definitions_['define_ioextender'] = '#include <PCF8574.h>\nPCF8574 pcf20(0x20);\n';
	Blockly.Arduino.setups_['setup_input_ioextender'] = 'pcf20.begin();';
	var code = 'pcf20.write('+dropdown_pin+','+ dropdown_stat+');\n'
	return code;
};

Blockly.Arduino.lekirbot_ext_buzzer = function() {
	var dropdown_stat = this.getFieldValue('STAT');
	Blockly.Arduino.definitions_['define_i2c'] = '#include <Wire.h>\n';
	Blockly.Arduino.definitions_['define_ioextender'] = '#include <PCF8574.h>\nPCF8574 pcf20(0x20);\n';
	Blockly.Arduino.setups_['setup_input_ioextender'] = 'pcf20.begin();';
	var code = 'pcf20.write(7,'+ dropdown_stat+');\n'
	return code;
};

Blockly.Arduino.lekirbot_megablink = function() {
	var value_delay = Blockly.Arduino.valueToCode(this, 'DELAY', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_lekirbot'] = '#include <lekirbot.h>\n';
	Blockly.Arduino.definitions_['var_lekirbot'] = 'lekirbot bot((unsigned char[]) { sens1, sens2, sens3, sens4, sens5} ,5, 4, QTR_NO_EMITTER_PIN);\n';
	var code = 'bot.megablink('+value_delay+');\n'
	return code;
};

Blockly.Arduino.lekirbot_knightrider = function() {
	var value_delay = Blockly.Arduino.valueToCode(this, 'DELAY', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_lekirbot'] = '#include <lekirbot.h>\n';
	Blockly.Arduino.definitions_['var_lekirbot'] = 'lekirbot bot((unsigned char[]) { sens1, sens2, sens3, sens4, sens5} ,5, 4, QTR_NO_EMITTER_PIN);\n';
	var code = 'bot.knightrider('+value_delay+');\n'
	return code;
};

//Motor Steer

Blockly.Arduino.lekirbot_motor_steer = function() {
	var dropdown_dir = this.getFieldValue('DIR');
	var value_speed = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_lekirbot'] = '#include <lekirbot.h>\n';
	Blockly.Arduino.definitions_['var_lekirbot'] = 'lekirbot bot((unsigned char[]) { sens1, sens2, sens3, sens4, sens5} ,5, 4, QTR_NO_EMITTER_PIN);\n';
	var code = 'bot.motorsteer("'+dropdown_dir+'",'+ value_speed+');\n'
	return code;
};

Blockly.Arduino.lekirbot_motor_tank = function() {
	var dropdown_dirl = this.getFieldValue('DIRL');
	var dropdown_dirr = this.getFieldValue('DIRR');
	var value_speedl = Blockly.Arduino.valueToCode(this, 'SPEEDL', Blockly.Arduino.ORDER_ATOMIC);
	var value_speedr = Blockly.Arduino.valueToCode(this, 'SPEEDR', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_lekirbot'] = '#include <lekirbot.h>\n';
	Blockly.Arduino.definitions_['var_lekirbot'] = 'lekirbot bot((unsigned char[]) { sens1, sens2, sens3, sens4, sens5} ,5, 4, QTR_NO_EMITTER_PIN);\n';
	var code = 'bot.motortank("'+dropdown_dirl+'",'+ value_speedl+',"'+dropdown_dirr+'",'+ value_speedr+');\n'
	return code;
};

Blockly.Arduino.lekirbot_motor_stop = function() {
	var dropdown_dir = this.getFieldValue('DIR');
	var value_speed = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_lekirbot'] = '#include <lekirbot.h>\n';
	Blockly.Arduino.definitions_['var_lekirbot'] = 'lekirbot bot((unsigned char[]) { sens1, sens2, sens3, sens4, sens5} ,5, 4, QTR_NO_EMITTER_PIN);\n';
	var code = 'bot.motorsteer("STOP",0);\n'
	return code;
};

Blockly.Arduino.lekirbot_calibrate = function() {
	Blockly.Arduino.definitions_['define_lekirbot'] = '#include <lekirbot.h>\n';
	Blockly.Arduino.definitions_['var_lekirbot'] = 'lekirbot bot((unsigned char[]) { sens1, sens2, sens3, sens4, sens5} ,5, 4, QTR_NO_EMITTER_PIN);\n';
	Blockly.Arduino.setups_['lekirbot_motor_lib']='bot.Motor(PWM1, PWM2, dir1, dir2);';
	// get the device ID, this is just a test to see if we're connected
	var code='bot.calibrate();\n';
	return code;
};

Blockly.Arduino.lekirbot_tracer = function() {
	var linetype = this.getFieldValue('line');
	var leftright = Blockly.Arduino.valueToCode(this, 'LeftRight', Blockly.Arduino.ORDER_ATOMIC);
	var base = 255;//maxSpeed
	var turn = 100;//not in use
	var kp = Blockly.Arduino.valueToCode(this, 'Kp', Blockly.Arduino.ORDER_ATOMIC);
	var kd = Blockly.Arduino.valueToCode(this, 'Kd', Blockly.Arduino.ORDER_ATOMIC);
	var sensor = 100;///not used i think , FKCH
	Blockly.Arduino.definitions_['define_lekirbot'] = '#include <lekirbot.h>\n';
	Blockly.Arduino.definitions_['var_lekirbot'] = 'lekirbot bot((unsigned char[]) { sens1, sens2, sens3, sens4, sens5} ,5, 4, QTR_NO_EMITTER_PIN);\n';     Blockly.Arduino.setups_['lekirbot_motor_lib']='bot.Motor(PWM1, PWM2, dir1, dir2);';
	// get the device ID, this is just a test to see if we're connected
	var code='bot.pid_line('+leftright+', '+leftright+', '+turn+', '+base+', '+kp+','+ kd+', '+linetype+', '+sensor+');\n';
	return code;
};

Blockly.Arduino.lekirbot_dtracer = function() {
	var leftright = Blockly.Arduino.valueToCode(this, 'LeftRight', Blockly.Arduino.ORDER_ATOMIC);
	var turn = 100;
	var kp = Blockly.Arduino.valueToCode(this, 'Kp', Blockly.Arduino.ORDER_ATOMIC);
	var kd = Blockly.Arduino.valueToCode(this, 'Kd', Blockly.Arduino.ORDER_ATOMIC);
	var sensor = 100;
	var linef = this.getFieldValue('line');
	var delay = Blockly.Arduino.valueToCode(this, 'Delay', Blockly.Arduino.ORDER_ATOMIC);
	Blockly.Arduino.definitions_['define_lekirbot'] = '#include <lekirbot.h>\n';
	Blockly.Arduino.definitions_['var_lekirbot'] = 'lekirbot bot((unsigned char[]) { sens1, sens2, sens3, sens4, sens5} ,5, 4, QTR_NO_EMITTER_PIN);\n';  
	Blockly.Arduino.setups_['lekirbot_motor_lib']='bot.Motor(PWM1, PWM2, dir1, dir2);';
	var code='bot.lekirbotDtracer('+leftright+', '+leftright+', '+turn+', '+kp+','+ kd+', '+sensor+','+linef+','+delay+');\n';
	return code;
};

Blockly.Arduino.lekirbot_tillJunction = function() {
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
	Blockly.Arduino.definitions_['define_lekirbot'] = '#include <lekirbot.h>\n';
	Blockly.Arduino.definitions_['var_lekirbot'] = 'lekirbot bot((unsigned char[]) { sens1, sens2, sens3, sens4, sens5} ,5, 4, QTR_NO_EMITTER_PIN);\n';  
	Blockly.Arduino.setups_['lekirbot_motor_lib']='bot.Motor(PWM1, PWM2, dir1, dir2);';
	// get the device ID, this is just a test to see if we're connected
	if (linef==0)
	var code='bot.lekirbotFinderBlack('+junction+','+action+','+leftright+','+turnspeed+','+kp+','+ kd+','+forwarddelay+','+turndelay+');\n';
	else if (linef==1)
	var code='bot.lekirbotFinderWhite('+junction+','+action+','+leftright+','+turnspeed+', '+kp+','+ kd+','+forwarddelay+','+turndelay+');\n';
	return code;
};

Blockly.Arduino.lekirbot_turn_at_center = function() {
	var direction = this.getFieldValue('DIR');
	var linetype = this.getFieldValue('line');
	var base = Blockly.Arduino.valueToCode(this, 'speed', Blockly.Arduino.ORDER_ATOMIC);
	var sensorc = 900;
	Blockly.Arduino.definitions_['define_lekirbot'] = '#include <lekirbot.h>\n';
	Blockly.Arduino.definitions_['var_lekirbot'] = 'lekirbot bot((unsigned char[]) { sens1, sens2, sens3, sens4, sens5} ,5, 4, QTR_NO_EMITTER_PIN);\n';     Blockly.Arduino.setups_['lekirbot_motor_lib']='bot.Motor(PWM1, PWM2, dir1, dir2);';
	// get the device ID, this is just a test to see if we're connected
	var code='bot.turn_at_center('+direction+', '+base+','+sensorc+', '+linetype+');\n';
	return code;
};

Blockly.Arduino.lekirbot_findline = function() {
	var leftright = Blockly.Arduino.valueToCode(this, 'LeftRight', Blockly.Arduino.ORDER_ATOMIC);
	var sensor = Blockly.Arduino.valueToCode(this, 'Sensor', Blockly.Arduino.ORDER_ATOMIC);
	var linef = this.getFieldValue('line');
	Blockly.Arduino.definitions_['define_lekirbot'] = '#include <lekirbot.h>\n';
	Blockly.Arduino.definitions_['var_lekirbot'] = 'lekirbot bot((unsigned char[]) { sens1, sens2, sens3, sens4, sens5} ,5, 4, QTR_NO_EMITTER_PIN);\n';
	Blockly.Arduino.setups_['lekirbot__minimotor_lib']='bot.Motor(PWM1, PWM2, dir1, dir2);';
	if (linef==0)
	var code='bot.lekirbotflineW('+leftright+', '+leftright+',  '+sensor+','+linef+');\n';
	else if (linef==1)
	var code='bot.lekirbotflineB('+leftright+', '+leftright+',  '+sensor+','+linef+');\n';
	return code;
};

Blockly.Arduino.lekirbot_linesensor = function() {
	var dropdown_sensor = this.getFieldValue('sensorx');
	Blockly.Arduino.definitions_['define_lekirbot'] = '#include <lekirbot.h>\n';
	Blockly.Arduino.definitions_['var_lekirbot'] = 'lekirbot bot((unsigned char[]) { sens1, sens2, sens3, sens4, sens5} ,5, 4, QTR_NO_EMITTER_PIN);\n';
	var code = 'bot.ir_sense('+dropdown_sensor+')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.lekirbot_ultrasonic_read = function() {
	var trig= 18;
	var echo= 19;
	Blockly.Arduino.setups_['setup_input_' + trig] = 'pinMode('+ trig +', OUTPUT);';
	Blockly.Arduino.setups_['setup_input_' + echo] = 'pinMode('+ echo +', INPUT);';
	Blockly.Arduino.definitions_['define_lekirbot_ultrasonic'] = "int lekirbot_ultrasonic(byte trig,byte echo)\n"+
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
	var code='lekirbot_ultrasonic('+trig+','+echo+')';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.lekirbot_ldr = function() {
	Blockly.Arduino.setups_['setup_input_ldr_mini'] = 'pinMode(A7, INPUT);';
	var code = 'analogRead(A7)';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};


Blockly.Arduino.lekirbot_gripper = function() {
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

Blockly.Arduino.lekirbot_servo_move = function() {
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

Blockly.Arduino.lekirbot_bluetooth_ready = function() {
	Blockly.Arduino.definitions_['define_lekirbot_bluetooth'] = "#include <SoftwareSerial.h>\n SoftwareSerial lekirbotbluetooth(0, 1); \n char BTdata; // variable for bluetooth";
	Blockly.Arduino.setups_['lekirbot_bluetooth']='lekirbotbluetooth.begin(9600);\n';
	// get the device ID, this is just a test to see if we're connected
	var code='lekirbotbluetooth.available()';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.lekirbot_bluetooth_data = function() {
	Blockly.Arduino.definitions_['define_lekirbot_bluetooth'] = "#include <SoftwareSerial.h>\nSoftwareSerial lekirbotbluetooth(0, 1); \n // variable for bluetooth";
	Blockly.Arduino.setups_['lekirbot_bluetooth']='lekirbotbluetooth.begin(9600);\n';
	// get the device ID, this is just a test to see if we're connected
	var code='lekirbotbluetooth.read()';
	return [code, Blockly.Arduino.ORDER_ATOMIC];
};



Blockly.Arduino.lekirbot_sound = function() {
	var sound = this.getFieldValue('sound');
	Blockly.Arduino.definitions_['define_lekirbot_sound'] = "#define SPEAKER   12\n"+
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
	Blockly.Arduino.setups_['lekirbot_sound']='  pinMode(SPEAKER,OUTPUT);  //\n';
	// get the device ID, this is just a test to see if we're connected
	var code=sound+'();\n';
	return code;
};


/*============ OLD PROGRAM ==============*/

Blockly.Arduino.lekirbot_path_finder = function() {
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
	Blockly.Arduino.definitions_['define_lekirbot'] = '#include <lekirbot.h>\n';
	Blockly.Arduino.definitions_['var_lekirbot'] = 'lekirbot bot((unsigned char[]) { sens1, sens2, sens3, sens4, sens5} ,5, 4, QTR_NO_EMITTER_PIN);\n';  
	Blockly.Arduino.setups_['lekirbot_motor_lib']='bot.Motor(PWM1, PWM2, dir1, dir2);';
	// get the device ID, this is just a test to see if we're connected
	if (linef==0)
	var code='bot.lekirbotFinderB('+junction+','+action+','+leftright+', '+leftright+', '+turn+', 100, '+kp+','+ kd+', '+sensorthreshold+','+fdelay+','+tdelay+');\n';
	else if (linef==1)
	var code='bot.lekirbotFinderW('+junction+','+action+','+leftright+', '+leftright+', '+turn+', 100, '+kp+','+ kd+', '+sensorthreshold+','+fdelay+','+tdelay+');\n';
	return code;
};

