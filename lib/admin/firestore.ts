import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, setDoc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { Achievements, WhyChooseUsReason, Partner } from "./types";

// Achievements: single document ("default") in collection "achievements"
export async function getAchievements(): Promise<Achievements | null> {
  const ref = doc(collection(db, "achievements"), "default");
  const snap = await getDoc(ref);
  return snap.exists() ? (snap.data() as Achievements) : null;
}

export async function saveAchievements(payload: Achievements): Promise<void> {
  const ref = doc(collection(db, "achievements"), "default");
  await setDoc(ref, { ...payload, updated_at: Date.now() }, { merge: true });
}

// Why Choose Us: CRUD list in collection "whyChooseUs"
export async function listReasons(): Promise<WhyChooseUsReason[]> {
  const q = query(collection(db, "whyChooseUs"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...(d.data() as WhyChooseUsReason) }));
}

export async function addReason(reason: Omit<WhyChooseUsReason, "id">): Promise<string> {
  const ref = await addDoc(collection(db, "whyChooseUs"), { ...reason, created_at: Date.now() });
  return ref.id;
}

export async function updateReason(id: string, reason: Partial<WhyChooseUsReason>): Promise<void> {
  const ref = doc(collection(db, "whyChooseUs"), id);
  await updateDoc(ref, { ...reason });
}

export async function deleteReason(id: string): Promise<void> {
  const ref = doc(collection(db, "whyChooseUs"), id);
  await deleteDoc(ref);
}

// Partners: CRUD list in collection "partners"
export async function listPartners(): Promise<Partner[]> {
  const q = query(collection(db, "partners"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...(d.data() as Partner) }));
}

export async function addPartner(partner: Omit<Partner, "id">): Promise<string> {
  const ref = await addDoc(collection(db, "partners"), { ...partner, created_at: Date.now() });
  return ref.id;
}

export async function updatePartner(id: string, partner: Partial<Partner>): Promise<void> {
  const ref = doc(collection(db, "partners"), id);
  await updateDoc(ref, { ...partner });
}

export async function deletePartner(id: string): Promise<void> {
  const ref = doc(collection(db, "partners"), id);
  await deleteDoc(ref);
}