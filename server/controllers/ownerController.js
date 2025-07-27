import User from "../models/User.js";

export const changeRoleToOwner = async (req, res) => {
    try {
        const { _id} = req.user;
        await User.findByIdAndUpdate(_id, { role: "owner" }, { new: true });
        res.json({
            success: true,
            message: "Role changed to owner successfully"
        });
    } catch (error) {
        console.log(error.message);
        res.json({
            success: false,
            message: error.message
        });
    }
}

