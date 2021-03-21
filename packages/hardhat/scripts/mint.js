/* eslint no-use-before-define: "warn" */
const fs = require("fs");
const chalk = require("chalk");
const { config, ethers } = require("hardhat");
const { utils, constants } = require("ethers");
const R = require("ramda");
const ipfsAPI = require('ipfs-http-client');
const ipfs = ipfsAPI({host: 'ipfs.infura.io', port: '5001', protocol: 'https' })

const delayMS = 10 //sometimes xDAI needs a 6000ms break

const toAddress = "0xD75b0609ed51307E13bae0F9394b5f63A7f8b6A1"

const main = async () => {


  console.log("\n\n 🎫 Minting to " + toAddress + "...\n");

  const radicalManager = await ethers.getContractAt('RadicalManager', fs.readFileSync("./artifacts/RadicalManager.address").toString())


  const item1 = {
    "name": "The Glassmakers Muse",
    "description": "The Glassmakers Muse (always for sale, 5% patronage)",
    "external_url": "https://moncur.ch/",
    "image": "https://images.squarespace-cdn.com/content/v1/575fa285e321408871d8ed19/1566204913834-DK30Q6JN7EOZ16W4XOTD/ke17ZwdGBToddI8pDm48kMlKPs01Yyk3gRbEhpRXPJEUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKc1zcjBzHC3OSERMj2jxBIFNl7r81kL8gT3dQF0e1kxZus2hq1yT6MeFIKjdSTZVvk/Moncur+-+The+Glassmakers+Muse+-+140x140cm+acrylic.jpg?format=2500w",
    "attributes": [
       {
         "trait_type": "artist",
         "value": "Moncur"
       }
    ]
  };
  const item1p = {
    "name": "5% Patronage on The Glassmakers Muse",
    "description": "Pay to the bearer on demand 5%.",
    "attributes": [
       {
         "trait_type": "Patronage Rate",
         "value": "5%"
       }
    ]
  }
  console.log("Uploading item1 radical ..")
  const i1r = await ipfs.add(JSON.stringify(item1))
  console.log("Uploading item1 patronage...")
  const i1p = await ipfs.add(JSON.stringify(item1p))
  console.log("Minting item1");
  await radicalManager.mint(toAddress, utils.parseEther("3"), 50, i1p.path, i1r.path, { gasLimit:4000000 })


  await sleep(delayMS)
  const item2 = {
    "name": "Glitterati",
    "description": "Glitterati (always for sale, 10% patronage)",
    "external_url": "https://moncur.ch/",
    "image": "https://images.squarespace-cdn.com/content/v1/575fa285e321408871d8ed19/1594712586277-Z1QRKOEJS3XRVDI87ZLJ/ke17ZwdGBToddI8pDm48kKB_fR79n880xOS-N5lKc8VZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxpEURhgSBEh9ILe0HKIG3COQlfzgXmXcH-iBsIE3okqFssv15w4XRMsOjQQp_CJx4/IMG_20200225_222147.jpg?format=2500w",
    "attributes": [
       {
         "trait_type": "artist",
         "value": "Moncur"
       }
    ]
  };
  const item2p = {
    "name": "10% Patronage on Glitterati",
    "description": "Pay to the bearer on demand 10%.",
    "attributes": [
       {
         "trait_type": "Patronage Rate",
         "value": "10%"
       }
    ]
  }
  console.log("Uploading item2 radical ..")
  const i2r = await ipfs.add(JSON.stringify(item2))
  console.log("Uploading item2 patronage...")
  const i2p = await ipfs.add(JSON.stringify(item2p))
  console.log("Minting item2");
  await radicalManager.mint(toAddress, utils.parseEther("2"), 100, i2p.path, i2r.path, { gasLimit:4000000 })
  

  await sleep(delayMS)
  const item3 = {
    "name": "Commodity",
    "description": "Commodity (always for sale, 20% patronage)",
    "external_url": "https://moncur.ch/",
    "image": "https://images.squarespace-cdn.com/content/v1/575fa285e321408871d8ed19/1597737083440-CAVJ2ZOALXFS199WOX5N/ke17ZwdGBToddI8pDm48kK4_xupwe4IDhu8s-lx1OjRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIwF_HUD9RhSbNHjHj4NKGS9yV-XbTWjDUnitvaYrQZNwKMshLAGzx4R3EDFOm1kBS/IMG_20200803_204244.jpg?format=2500w",
    "attributes": [
       {
         "trait_type": "artist",
         "value": "Moncur"
       }
    ]
  };
  const item3p = {
    "name": "20% Patronage on Commodity",
    "description": "Pay to the bearer on demand 20%.",
    "attributes": [
       {
         "trait_type": "Patronage Rate",
         "value": "20%"
       }
    ]
  }
  console.log("Uploading item3 radical ..")
  const i3r = await ipfs.add(JSON.stringify(item3))
  console.log("Uploading item3 patronage...")
  const i3p = await ipfs.add(JSON.stringify(item2p))
  console.log("Minting item2");
  await radicalManager.mint(toAddress, utils.parseEther("1"), 200, i3p.path, i3r.path, { gasLimit:4000000 })



  await sleep(delayMS)
  const item4 = {
    "name": "Suspended",
    "description": "Suspended (always for sale, 30% patronage)",
    "external_url": "https://moncur.ch/",
    "image": "https://images.squarespace-cdn.com/content/v1/575fa285e321408871d8ed19/1594708462937-P8C1SJ1SUPFBCRU0NLHB/ke17ZwdGBToddI8pDm48kMtiXMEMZ8ID8MVhA-T_Qc9Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIfy9uRsqnknGrsPwiW8VdnsJxMq6FvgYbxptNsO-6IOIKMshLAGzx4R3EDFOm1kBS/Moncur_Suspended_1400x1400.jpg?format=2500w",
    "attributes": [
       {
         "trait_type": "artist",
         "value": "Moncur"
       }
    ]
  };
  const item4p = {
    "name": "30% Patronage on Suspended",
    "description": "Pay to the bearer on demand 30%.",
    "attributes": [
       {
         "trait_type": "Patronage Rate",
         "value": "30%"
       }
    ]
  }
  console.log("Uploading item4 radical ..")
  const i4r = await ipfs.add(JSON.stringify(item4))
  console.log("Uploading item4 patronage...")
  const i4p = await ipfs.add(JSON.stringify(item2p))
  console.log("Minting item2");
  await radicalManager.mint(toAddress, utils.parseEther("0.5"), 300, i4p.path, i4r.path, { gasLimit:4000000 })

};

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
