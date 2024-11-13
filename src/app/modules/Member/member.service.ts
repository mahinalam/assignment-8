import { Member } from "@prisma/client";
import prisma from "../../sharred/prisma";

// create member
const createMemberIntoDB = async (payload: Member): Promise<Member | null> => {
  const result = await prisma.member.create({
    data: payload,
  });
  return result;
};

// Retrieves a list of all members in the library.
const getAllMembersFromDB = async (): Promise<Member[] | []> => {
  const result = await prisma.member.findMany();
  return result;
};

// Fetches details of a specific member by their memberId.
const getSingleMemberFromDB = async (
  memberId: string
): Promise<Member | null> => {
  const result = await prisma.member.findUnique({
    where: {
      memberId,
    },
  });
  return result;
};

// Updates information of an existing member by their memberId.
const updateMemberIntoDB = async (
  memberId: string,
  payload: Partial<Member>
): Promise<Member | null> => {
  const result = await prisma.member.update({
    where: {
      memberId,
    },
    data: payload,
  });
  return result;
};

// delete specefic member
const deleteMemberFromDB = async (memberId: string) => {
  const result = await prisma.member.delete({
    where: {
      memberId,
    },
  });
  return result;
};

export const MemberService = {
  createMemberIntoDB,
  getAllMembersFromDB,
  getSingleMemberFromDB,
  updateMemberIntoDB,
  deleteMemberFromDB,
};
