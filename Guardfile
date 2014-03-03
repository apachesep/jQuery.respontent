# Guardfile for the jQuery respontent plugin javascript files.
# This minifies the non-minified .js-file.

# For some reason, uglify only seems to work if the input and output is the same file.
# Therefor, we need to copy the contents from the original file to the minified file (using concat) before it can be minified.
guard :concat, type: "js", files: %w(jquery.respontent), input_dir: "src/js", output: "src/js/jquery.respontent.min"

# Minify the file
guard 'uglify', :destination_file => "src/js/jquery.respontent.min.js" do
  watch ('src/js/jquery.respontent.min.js')
end