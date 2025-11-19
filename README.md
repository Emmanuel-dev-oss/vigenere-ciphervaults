# CipherVault - Vigenère Cipher Tool

![CipherVault Banner](https://via.placeholder.com/1200x400/0a0a14/00ff9d?text=CipherVault+Vigenère+Cipher+Tool)

A modern, web-based implementation of the Vigenère cipher for encryption, decryption, and key derivation.

## 🚀 Features

- **🔑 Key Finder**: Derive encryption keys from known ciphertext and plaintext pairs
- **🔒 Encryption**: Convert plaintext to ciphertext using custom keys
- **🔓 Decryption**: Recover original text from encrypted messages
- **🛡️ Secure**: Client-side processing - no data leaves your browser

## 📋 Table of Contents

- [Installation](#installation)
- [Technical Details](#technical-details)
- [Usefulness](#technical-details)
- [Contributing](#contributing)

## 🛠️ Installation

### Prerequisites
- Just have javascript code runner on your vscode or any comkpiler of your choice
- Local server (for local development)

## 🏗️ Technical Details
### Algorithm
- The **Vigenère cipher** is a method of encrypting alphabetic text by using a simple form of polyalphabetic substitution. The encryption can be described algebraically as:
- C_i = (P_i + K_i) mod 26 for **encrytption**
- D_i = (P_i - K_i + 26) mod 26 for **decryption**
- K_i = (C_i - P_i + 26) mod 26 for **key generation**
Where:
#### D_i is the deciphertext character

#### C_i is the ciphertext character

#### P_i is the plaintext character

#### K_i is the key character

#### - This program can be useful when you want to break through and encrypted text after you'ved discovered it uses vigenere tecnques for it encryption(there are many was to detect like using the Kasiski examination and repeating pattern recognition, Index of Coincidence (IOC) Analysis, Key-length estimation, alphabetic constraint and many more) then you'll
#### - then you'll can use any of the function to the original_text and the cipherText function to get your encrytpion key, and then use the key for other important decryption.

## Character Handling
- Alphabetic characters: Encrypted/decrypted using the Vigenère algorithm
- Non-alphabetic characters: Preserved as-is (spaces, punctuation, numbers)
- Case handling: All text is converted to uppercase during processing

## Key Features
- Automatic key repetition for texts longer than the key
- Preservation of non-alphabetic characters
- Client-side processing for maximum privacy

## 🤝 Contributing
### We welcome contributions! Please follow these steps:

- Fork the repository
- Create a feature branch: git checkout -b feature/amazing-feature
- Commit your changes: git commit -m 'Add amazing feature'
- Push to the branch: git push origin feature/amazing-feature
- Open a Pull Request

