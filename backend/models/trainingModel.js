const mongoose = require("mongoose")

const trainingShema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		trainingName: {
			type: String,
			required: true,
		},
		muscleGroup: {
			type: [
				{
					type: String,
					// enum: ["Chest", "Back", "Legs", "Shoulders", "Arms", "ABS"],
				},
			],
			required: [true, "Please choose"],
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model("Training", trainingShema)
