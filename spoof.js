const crypto = require("crypto");
const fs = require("fs");

function computeHash(filePath, algo = "sha512") {
  // Compute the hash of the file
  const fileBuffer = fs.readFileSync(filePath);
  const hash = crypto.createHash(algo).update(fileBuffer).digest("hex");
  return hash;
}

function adjustImageForHash(inputImage, outputImage, targetPrefix, algo = "sha512") {
  // Copy the input image to the output image
  fs.copyFileSync(inputImage, outputImage);

  // Modifiable byte buffer
  const appendBuffer = Buffer.alloc(1);
  let currentHash;

  console.log("Adjusting the image to match hash prefix...");
  while (true) {
    // Append a byte to the output file
    fs.appendFileSync(outputImage, appendBuffer);

    // Compute the hash of the modified file
    currentHash = computeHash(outputImage, algo);

    // Check if the hash starts with the desired prefix
    if (currentHash.startsWith(targetPrefix)) {
      console.log(`Match found! Hash: ${currentHash}`);
      break;
    }
  }
}

if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length !== 3) {
    console.error("Usage: node spoof.js <hex_prefix> <input_image> <output_image>");
    process.exit(1);
  }

  const targetPrefix = args[0].replace(/^0x/, ""); // Remove "0x" if provided
  const inputImage = args[1];
  const outputImage = args[2];

  if (!/^[0-9a-f]+$/i.test(targetPrefix)) {
    console.error("Error: Prefix must be a valid hexadecimal string.");
    process.exit(1);
  }

  if (!fs.existsSync(inputImage)) {
    console.error("Error: Input image file does not exist.");
    process.exit(1);
  }

  adjustImageForHash(inputImage, outputImage, targetPrefix);
}
