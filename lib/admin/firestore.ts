import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, setDoc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { Achievements, WhyChooseUsReason, Partner, Faq, Testimonial, TeamMember, PartnerTestimonial, CareerOpening, ContactMessage, NewsletterSubscriber } from "./types";

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

// FAQ: CRUD list in collection "faq"
export async function listFaqs(): Promise<Faq[]> {
  const q = query(collection(db, "faq"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...(d.data() as Faq) }));
}

export async function addFaq(item: Omit<Faq, "id">): Promise<string> {
  const ref = await addDoc(collection(db, "faq"), { ...item, created_at: Date.now() });
  return ref.id;
}

export async function updateFaq(id: string, item: Partial<Faq>): Promise<void> {
  const ref = doc(collection(db, "faq"), id);
  await updateDoc(ref, { ...item });
}

export async function deleteFaq(id: string): Promise<void> {
  const ref = doc(collection(db, "faq"), id);
  await deleteDoc(ref);
}

// Testimonials: CRUD list in collection "testimonials"
export async function listTestimonials(): Promise<Testimonial[]> {
  const q = query(collection(db, "testimonials"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...(d.data() as Testimonial) }));
}

export async function addTestimonial(item: Omit<Testimonial, "id">): Promise<string> {
  const ref = await addDoc(collection(db, "testimonials"), { ...item, created_at: Date.now() });
  return ref.id;
}

export async function updateTestimonial(id: string, item: Partial<Testimonial>): Promise<void> {
  const ref = doc(collection(db, "testimonials"), id);
  await updateDoc(ref, { ...item });
}

export async function deleteTestimonial(id: string): Promise<void> {
  const ref = doc(collection(db, "testimonials"), id);
  await deleteDoc(ref);
}

// Team Members: CRUD list in collection "teamMembers"
export async function listTeamMembers(): Promise<TeamMember[]> {
  const q = query(collection(db, "teamMembers"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...(d.data() as TeamMember) }));
}

export async function addTeamMember(item: Omit<TeamMember, "id">): Promise<string> {
  const ref = await addDoc(collection(db, "teamMembers"), { ...item, created_at: Date.now() });
  return ref.id;
}

export async function updateTeamMember(id: string, item: Partial<TeamMember>): Promise<void> {
  const ref = doc(collection(db, "teamMembers"), id);
  await updateDoc(ref, { ...item });
}

export async function deleteTeamMember(id: string): Promise<void> {
  const ref = doc(collection(db, "teamMembers"), id);
  await deleteDoc(ref);
}

// Partners' Testimonials: CRUD list in collection "partnersTestimonials"
export async function listPartnersTestimonials(): Promise<PartnerTestimonial[]> {
  const q = query(collection(db, "partnersTestimonials"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...(d.data() as PartnerTestimonial) }));
}

export async function addPartnersTestimonial(item: Omit<PartnerTestimonial, "id">): Promise<string> {
  const ref = await addDoc(collection(db, "partnersTestimonials"), { ...item, created_at: Date.now() });
  return ref.id;
}

export async function updatePartnersTestimonial(id: string, item: Partial<PartnerTestimonial>): Promise<void> {
  const ref = doc(collection(db, "partnersTestimonials"), id);
  await updateDoc(ref, { ...item });
}

export async function deletePartnersTestimonial(id: string): Promise<void> {
  const ref = doc(collection(db, "partnersTestimonials"), id);
  await deleteDoc(ref);
}

// Careers: CRUD list in collection "careers"
export async function listCareers(): Promise<CareerOpening[]> {
  const q = query(collection(db, "careers"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...(d.data() as CareerOpening) }));
}

export async function addCareer(item: Omit<CareerOpening, "id">): Promise<string> {
  const ref = await addDoc(collection(db, "careers"), { ...item, created_at: Date.now() });
  return ref.id;
}

export async function updateCareer(id: string, item: Partial<CareerOpening>): Promise<void> {
  const ref = doc(collection(db, "careers"), id);
  await updateDoc(ref, { ...item });
}

export async function deleteCareer(id: string): Promise<void> {
  const ref = doc(collection(db, "careers"), id);
  await deleteDoc(ref);
}

// Contact Messages: CRUD list in collection "contactMessages"
export async function listContactMessages(): Promise<ContactMessage[]> {
  const q = query(collection(db, "contactMessages"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...(d.data() as ContactMessage) }));
}

export async function addContactMessage(item: Omit<ContactMessage, "id">): Promise<string> {
  const ref = await addDoc(collection(db, "contactMessages"), { ...item, created_at: Date.now() });
  return ref.id;
}

export async function updateContactMessage(id: string, item: Partial<ContactMessage>): Promise<void> {
  const ref = doc(collection(db, "contactMessages"), id);
  await updateDoc(ref, { ...item });
}

export async function deleteContactMessage(id: string): Promise<void> {
  const ref = doc(collection(db, "contactMessages"), id);
  await deleteDoc(ref);
}

// Newsletter Subscribers: CRUD list in collection "newsletterSubscribers"
export async function listNewsletterSubscribers(): Promise<NewsletterSubscriber[]> {
  const q = query(collection(db, "newsletterSubscribers"));
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...(d.data() as NewsletterSubscriber) }));
}

export async function addNewsletterSubscriber(item: Omit<NewsletterSubscriber, "id">): Promise<string> {
  const ref = await addDoc(collection(db, "newsletterSubscribers"), { ...item, created_at: Date.now() });
  return ref.id;
}

export async function updateNewsletterSubscriber(id: string, item: Partial<NewsletterSubscriber>): Promise<void> {
  const ref = doc(collection(db, "newsletterSubscribers"), id);
  await updateDoc(ref, { ...item });
}

export async function deleteNewsletterSubscriber(id: string): Promise<void> {
  const ref = doc(collection(db, "newsletterSubscribers"), id);
  await deleteDoc(ref);
}