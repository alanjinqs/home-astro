import os
import json
from PIL import Image
from natsort import natsorted

def generate_image_list_and_save_json(directory):
    # List to hold the image data
    images_list = []

    # Walk through the directory
    for filename in os.listdir(directory):
        if filename.endswith(".jpeg"):
            # Complete path to the image file
            filepath = os.path.join(directory, filename)

            # Open the image to get its dimensions
            with Image.open(filepath) as img:
                width, height = img.size

            # Append the data to the list
            images_list.append({
                "id": filename.split('.')[0],  # Assuming you want the filename without the extension
                "width": width,
                "height": height
            })
    images_list = natsorted(images_list, key=lambda x: x['id'])

    # Path where the JSON file will be saved
    json_file_path = os.path.join(directory, 'files.json')

    # Write the list to a JSON file
    with open(json_file_path, 'w') as json_file:
        json.dump(images_list, json_file, indent=4)

    return json_file_path

# Directory containing the images
directory = '/Users/alanjin/Code/Playground/home-astro/public/imgs/web'
# Generate the list and save to JSON
json_file_path = generate_image_list_and_save_json(directory)
print(f"JSON file saved at: {json_file_path}")