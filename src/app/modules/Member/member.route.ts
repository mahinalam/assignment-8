import express from "express";
import { MemberController } from "./member.controller";

const router = express.Router();

router.post("/", MemberController.createMember);

router.get("/", MemberController.getAllMembers);

router.get("/:memberId", MemberController.getSingleMember);

router.put("/:memberId", MemberController.updateMember);

router.delete("/:memberId", MemberController.deleteMember);

export const MemberRoute = router;
