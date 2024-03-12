import os
import re
import shutil
import zipfile
import tkinter as tk
from tkinter import ttk

from tkinter import filedialog
from PIL import Image, ImageTk
from tkinter import colorchooser
import os.path



global image_path
global color_code

def upload_image():
	file_path = filedialog.askopenfilename(filetypes=[('Image Files', '*.png')])
	# print('Selected:', file_path)
	if file_path:
		load_and_display_image(file_path)

def select_folder(zip_name):
	file_path = filedialog.asksaveasfile(initialfile = zip_name+".zip")
	# print(file_path.name)
	zip_path= "./"+zip_name+".zip"
	# print('From:', zip_path)
	if ('zip' in file_path.name):
		output_zip_path= file_path.name
	else:
		output_zip_path= file_path.name+".zip"
	
	# print('To:', output_zip_path)
	shutil.copyfile(zip_path,output_zip_path)

def load_and_display_image(file_path):
	image = Image.open(file_path)
	image.thumbnail((150, 150))  # Resize the image to fit in the GUI
	img = ImageTk.PhotoImage(image)

	# Update the image on the label
	image_label.config(image=img)
	image_label.image = img

	# Save the directory path for later use
	global image_path
	image_path = file_path
	generate_button['state'] = tk.NORMAL
	

def generate_and_zip():
	global color_code
	robotname=clicked.get()

	directory_path = robotname
	
	old_text = robotname
	new_dir = robotname+"_duplicate"
	new_name = text_output.get('1.0','end-1c')
	color_directory_path=robotname+"/extensions/"+new_name+"/blocks/"+new_name+"/"+new_name+".js"
	colori= "=\""+color_code+"\""
	old_color="=155"
	if (new_name!=""):
		duplicate_folder(directory_path, new_dir)
		# Rename files and replace text
		rename_files_and_folders(directory_path,old_text, new_name)
		print("Files and folders renamed successfully.")
		replace_text_in_file(color_directory_path,old_color, colori)
		print("Block Color Updated successfully.")
		# print(f"Zip file '{zip_filename}' created.")
		os.rename(robotname,new_name)
		os.rename(robotname+"_duplicate",robotname)
		file_extensions = [".js", ".xml", ".cpp", ".h",".json"]
		rename_text_in_files(new_name, old_text, new_name, file_extensions)

		# # Create a zip file of the newly renamed files and folders
		
		# print(f"Contents of '{directory_path}' zipped successfully to '{zip_filename}'.")
		global image_path
		if (os.path.isfile(image_path)):
			new_image_file= new_name+"/extensions/"+new_name+"/blocks/"+new_name+"/media/robotimage.png"
			# print(new_image_file)
			shutil.copyfile(image_path,new_image_file)
		else:
			print("Cannot detect file")
		zip_filename = new_name+".zip"
		zip_directory_contents(new_name, zip_filename)
		select_folder(new_name)
		os.remove(new_name+".zip")

		shutil.rmtree(new_name)
		
	else:
		print("Please insert File/Bot Name")
	generate_button['state'] = tk.DISABLED
	
	
def duplicate_folder(src_folder, dest_folder):
	try:
		# Copy the entire folder and its contents
		shutil.copytree(src_folder, dest_folder)
		print(f"Folder '{src_folder}' duplicated to '{dest_folder}' successfully.")
	except shutil.Error as e:
		print(f"Error: {e}")
	except Exception as e:
		print(f"Unexpected error: {e}")



def rename_files_and_folders(directory_path, old_text, new_text):

	for root, dirs, files in os.walk(directory_path):
		for file in files:
			if old_text in file:
				file_path = os.path.join(root, file)
				new_file_path = os.path.join(root, file.replace(old_text, new_text))
				os.rename(file_path, new_file_path)
	for root,dirs, files in os.walk(directory_path,topdown=False):
		for folder in dirs:
			# print(folder)
			original_path = os.path.join(root, folder)
			new_path = os.path.join(root, folder.replace(old_text, new_text))
			os.rename(original_path, new_path)
			# print("Rename"+original_path+"to"+new_path)
			

def replace_text_in_file(file_path, new_name):
	with open(file_path, 'r') as file:
		content = file.read()
		
	# Replace text
	new_content = re.sub(r'\b\w+\b', new_name, content)
	
	with open(file_path, 'w') as file:
		file.write(new_content)
		
def rename_text_in_files(directory_path, old_text, new_text, file_extensions):
	for root, dirs, files in os.walk(directory_path):
		for file in files:
			if file.endswith(tuple(file_extensions)):
				file_path = os.path.join(root, file)
				replace_text_in_file(file_path, old_text, new_text)

def replace_text_in_file(file_path, old_text, new_text):
	with open(file_path, 'r', encoding='utf-8') as file:
		content = file.read()

	# Replace text
	new_content = re.sub(re.escape(old_text), new_text, content)

	with open(file_path, 'w', encoding='utf-8') as file:
		file.write(new_content)
				
				
def zip_directory_contents(directory_path, zip_filename):
	with zipfile.ZipFile(zip_filename, 'w') as zipf:
		for root, dirs, files in os.walk(directory_path):
			for file in files:
				file_path = os.path.join(root, file)
				arcname = os.path.relpath(file_path, directory_path)
				zipf.write(file_path, arcname)

def choose_color():	
	global color_code
	
	# variable to store hexadecimal code of color
	color_code = colorchooser.askcolor(title ="Choose color") 
	color_code=color_code[1]
	color_button.configure(bg=color_code)
# Create the main window
root = tk.Tk()
root.title("TinkerCode Extension Generator")
root.wm_attributes('-toolwindow', True)


options = [ 
    "lekirbot", 
    "jebatbot"
] 
  
# datatype of menu text 
clicked = tk.StringVar() 
  
# initial menu text 
clicked.set( "lekirbot" ) 
  
# Create Dropdown menu 
drop = tk.OptionMenu( root , clicked , *options ) 
drop.pack() 


# Create and place the label for displaying the uploaded image
bot_label = tk.Label(root,text="Bot Name")
bot_label.pack(padx=1,pady=1)


# Create and place the textbox
text_output = tk.Text(root, height=1, width=10,font=('Times New Roman', 23, 'bold'))
text_output.tag_configure("center", justify='center')
text_output.pack(pady=3)


f1=tk.Frame(root)
f1.pack(expand=1)
# Create and place the button to select color
# Create and place the button to select color
color_button = tk.Button(f1, width=2,text = "",bg="blue",
				   command = choose_color)
color_button.pack(expand=True,side=tk.LEFT)

# Create and place the image upload button
upload_button = tk.Button(f1,width=18, text="Select Bot Image", command=upload_image)
upload_button.pack(expand=True,side=tk.LEFT)




# Create and place the label for displaying the uploaded image
image_label = tk.Label(root)
image_label.pack(pady=5)

# Create and place the "Generate" button
generate_button = tk.Button(root, text="Generate Extension", command=generate_and_zip, state= "disabled",font=('Times New Roman', 10, 'bold'))
generate_button.pack(pady=5)

# Start the Tkinter event loop
root.mainloop()
root.update() 
							
														

