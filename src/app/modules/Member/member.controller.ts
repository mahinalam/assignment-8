import { Request, Response } from "express";
import catchAsync from "../../sharred/catchAsync";
import sendResponse from "../../sharred/sendResponse";
import { MemberService } from "./member.service";

// create a member.
const createMember = catchAsync(async (req: Request, res: Response) => {
  const result = await MemberService.createMemberIntoDB(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Member created successfully",
    data: result,
  });
});

// Retrieves a list of all members in the library.
const getAllMembers = catchAsync(async (req: Request, res: Response) => {
  const result = await MemberService.getAllMembersFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Members retrieved successfully",
    data: result,
  });
});

// Retrieves a specefic member.
const getSingleMember = catchAsync(async (req: Request, res: Response) => {
  const { memberId } = req.params;
  const result = await MemberService.getSingleMemberFromDB(memberId);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Member retrieved successfully",
    data: result,
  });
});

// update a specefic member.
const updateMember = catchAsync(async (req: Request, res: Response) => {
  const { memberId } = req.params;
  const result = await MemberService.updateMemberIntoDB(memberId, req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Member updated successfully",
    data: result,
  });
});

// delete a specefic member.
const deleteMember = catchAsync(async (req: Request, res: Response) => {
  const { memberId } = req.params;
  await MemberService.deleteMemberFromDB(memberId);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Member successfully deleted",
  });
});

export const MemberController = {
  createMember,
  getAllMembers,
  getSingleMember,
  updateMember,
  deleteMember,
};
