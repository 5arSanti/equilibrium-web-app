const sharp = require("sharp");

const compressImage = async (image) => {
	const buffer = Buffer.from(image.split(",")[1], "base64");

	const compressedImageBuffer = await sharp(buffer)
		.resize(500, 500, { fit: "inside" })
		.toFormat("jpeg", { quality: 65 })
		.toBuffer();

	const compressedImageHex = compressedImageBuffer.toString("hex");

	return compressedImageHex;
}

module.exports = { compressImage };