# ImageSearchWebApp

vue part:
     1. Install nodejs environment
     2. Enter the project1 directory and execute the npm i command
     3. Execute the npm run serve command
     4. Enter http://localhost:51888 in the browser to enter the main page
python part:
     1. Install python environment
     2. Install the necessary modules
     3. Start the flask service
The main function:  
     1. Click the upload button on the page to upload the picture to the python service images directory
     2. Python analyzes the feature code of the uploaded picture, generates a sift file, and stores the picture-related data in the database
     3. Python query similar images and return them to the vue page for result display
Other:
     1. Execute projectImage.py in python to enter the image data in the images directory into the database in batches
     2. Execute cocabulary.py in python to generate image sift files in the images directory in batches
