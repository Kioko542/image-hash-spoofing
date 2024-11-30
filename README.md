

# 🖼️ Image Hash Spoofing Tool 🔐

## 🎯 What's This About?

Imagine an image that's visually *identical* to the original, but behind the scenes, it's secretly been altered to produce a different hash. Welcome to the **Image Hash Spoofing Tool**! This Node.js-powered project lets you modify an image file so that its hash matches a specified prefix — while keeping the image visually unchanged.

Sounds like magic? It’s not. It’s a fun and powerful example of how metadata manipulation can change how data is perceived without affecting its appearance. Whether you're into cryptography, file integrity, or just cool tricks, this tool is here to demonstrate some clever file manipulation.

---

## 🚀 Features

- **Invisible changes**: The image stays visually identical.
- **Customizable**: Specify the hash prefix, input file, and output file.
- **Fast**: Simple algorithm that works seamlessly in just a few steps.
- **Ready for testing**: Comes with a sample image (`original.jpg`) for easy testing.

---

## 🖥️ Getting Started

Ready to dive in? Just follow these steps and you’ll be up and running in no time.

### 1. Clone the Repository

Get your hands on the project by cloning the repository:

```bash
git clone https://github.com/your-username/image-hash-spoofing.git
cd image-hash-spoofing
```

### 2. Install Dependencies

Run the following command to install all necessary dependencies:

```bash
npm install
```

---

## 🧑‍💻 Usage

### The Fast Track (with Default Image)

If you want to skip the setup and start playing with the tool right away, run:

```bash
npm start
```

This will:

- Use `original.jpg` as the input image (you don’t need to worry about the source).
- Generate an altered image with the hash starting with `0x24` (you can change this of course).
- Output the result as `altered.jpg`.

It’s simple, quick, and you can immediately start testing the magic!

---

### Customizing It

Want to specify your own prefix, input file, or output file? No problem. Use this command:

```bash
node spoof.js <hex_prefix> <input_image> <output_image>
```

For example:

```bash
node spoof.js 0x24 original.jpg altered.jpg
```

This command will take `original.jpg` and create `altered.jpg` where the hash starts with `0x24`. 

---

### Verifying the Hash

After running the script, you'll want to verify that the hash matches your specified prefix. Use the following command to check the hash:

```bash
sha512sum altered.jpg
```

You'll see something like:

```bash
24a5f7c8d...f8e76f altered.jpg
```

---

## 🛠️ How It Works

Here’s the science behind the magic:

1. **Hash Calculation**:
   The script computes the SHA-512 hash of the original image.

2. **Invisible Alterations**:
   It doesn’t touch the image’s pixels — instead, it adjusts the metadata or appends hidden bytes.

3. **Continuous Tweaks**:
   The script keeps modifying and checking the hash until it matches your desired prefix.

4. **Done!**:
   The modified image is saved, and the hash will start with the prefix you provided.

---

## 🗂️ Project Structure

Here’s how the project is organized:

```
image-hash-spoofing/
│
├── spoof.js          # Main script for hash spoofing
├── package.json      # Node.js project metadata
├── README.md         # Project documentation
├── original.jpg      # Sample input image
└── .gitignore        # Ignored files and folders
```

---

## 💡 Example

Let’s make it real! After cloning the project, you can run the default setup:

```bash
node spoof.js 0x24 original.jpg altered.jpg
```

This will create an `altered.jpg` file with the hash starting with `0x24`. 

Then, you can verify the new hash with:

```bash
sha512sum altered.jpg
```

You should see something like:

```bash
24a5f7c8d...f8e76f altered.jpg
```

---

## 🎉 Contribution

If you’ve got ideas for making this tool even cooler, feel free to fork the repo and submit a pull request. Here’s how you can do it:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m "Add feature"`
4. Push to the branch: `git push origin feature-name`
5. Create a Pull Request!


---

## 📝 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

## 📬 Contact

For questions, feedback, or just to chat about cryptography:

- **Name**: Emmanuel Kioko
- **Email**: kioxmanu7@gmail.com
- **GitHub**:https://github.com/Kioko542
```

---



