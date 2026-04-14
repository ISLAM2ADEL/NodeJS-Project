import transactionModel from "../Models/Transaction.js";
import userModel from "../Models/User.js";

export const getAllusers=async(req,res)=>{
const users = await userModel.find({}).select("-password");
    try{
        res.status(200).json({
            success:true,
            count:users.length,
            data:users,
            message:"All users fetched successfully"
        })
    }
    catch(error)
    {
      res.status(500).json({
        success:false,
       error:error.message,
      })
    }

}

//get global analytics:
export const getAdminStats=async(req,res)=>{
    try{
        const totalUsers=await userModel.countDocuments({});//bgeed el total number of users

        //ngeeb egmaly el expenses,income
        const cashFlow=await transactionModel.aggregate([
            {
                $group:{
                    _id:"$type",//el type income wala expense
                    sum:{$sum:"$amount"}
                }
            }
        ]);
        let totalIncome=0;
        let totalExpense=0;

        //hna bgeeb el total income w total expense mn el cashFlow array
        cashFlow.forEach((item)=>{
            if(item._id==="income")
            {
                totalIncome=item.sum;
            }
            else if(item._id==="expense")
            {
                totalExpense=item.sum;
            }
        })
        res.status(200).json({
            success:true,
            data:{
                activeUsers: totalUsers,
        totalIncome,
        totalExpense,
        // Calculate net system cash flow wlw hwa bykon 3obara 3n total income - total expense
        netSystemCashFlow: totalIncome - totalExpense
      },
      message: "Global stats fetched successfully",
        })

    }
    catch(error)
    {
        res.status(500).json({
            success:false,
            error:error.message
        })

    }
}

export const deleteUser=async(req,res)=>{
    try{
        const userId=req.params.id;
        const user=await userModel.findById(userId);
        if(!user){
            return res.status(404).json({
                success:false,
                message:"User not found"
            })

        }

        await transactionModel.deleteMany({user:userId});//hna bms7 kol el transactions elly 3nd el user da
        await userModel.findByIdAndDelete(userId);//hna bms7 el user da
        res.status(200).json({
            success:true,
            data:{},
            message:"User and all related transactions deleted successfully"
        })
    }
        catch(error){
            res.status(500).json({
                success:false,
                error:error.message
            })
        }
}