## AWS KMS

AWS KMS is a managed service for creating and managing encryption keys. 

### Exercise 1: Create a key, encrypt and decrypt it

1. Create a new key 
    * `aws kms create-key --description="My example key"`
2. Create some text
    * `openssl base64 -in plaintext.txt -out base64.txt`
3. Encrypt secret
    * `aws kms encrypt --plaintext="file://base64.txt" --key-id="89258ecf-c63f-4cf8-bef3-3c6224a4e376" | jq .CiphertextBlob -r >> decrypt.txt` 
4. Decrypt secret 
    * `aws kms decrypt --ciphertext-blob="file://decrypt.txt" --key-id="89258ecf-c63f-4cf8-bef3-3c6224a4e376" | jq .Plaintext -r | base64 --decode`