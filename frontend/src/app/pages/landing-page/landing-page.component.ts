import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

interface Feature {
  title: string;
  description: string;
  badge: string;
}

interface Step {
  stepNumber: string;
  title: string;
  description: string;
}

interface ClinicType {
  name: string;
  specialty: string;
  highlight: string;
}

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent implements OnInit {
  // Feature cards data
  readonly features: readonly Feature[] = [
    {
      title: 'WhatsApp Patient Communication',
      description:
        'Engage patients directly on WhatsApp where they already communicate. Centralize incoming enquiries, answer routine questions, and maintain conversation history in one place.',
      badge: 'Communication',
    },
    {
      title: 'Appointment Management',
      description:
        'Provide seamless self-service booking directly inside WhatsApp. Patients select available time slots with real-time clinic calendar synchronization and zero double-booking.',
      badge: 'Scheduling',
    },
    {
      title: 'Patient Journey Automation',
      description:
        'Automatically triage and qualify patient requests based on symptoms, urgency, and clinic specialty before directing them to the appropriate consultation slot.',
      badge: 'Automation',
    },
    {
      title: 'Follow-ups & Reminders',
      description:
        'Drastically reduce appointment no-shows with timed automated WhatsApp reminders, pre-visit instructions, and proactive post-consultation care check-ins.',
      badge: 'Engagement',
    },
  ];

  // 4-step process data
  readonly steps: readonly Step[] = [
    {
      stepNumber: '01',
      title: 'Patient messages your clinic',
      description:
        'Patients initiate contact through your WhatsApp link, website widget, QR code, or clinic contact number at any time of day.',
    },
    {
      stepNumber: '02',
      title: 'The system handles the enquiry',
      description:
        'The automated conversation engine collects preliminary symptoms, patient details, and qualifies the reason for consultation.',
    },
    {
      stepNumber: '03',
      title: 'Patient books an appointment',
      description:
        'Patients pick their preferred doctor, date, and time slot right within the chat conversation without waiting on hold.',
    },
    {
      stepNumber: '04',
      title: 'The clinic manages the patient journey',
      description:
        'The clinic dashboard tracks bookings, while automated reminders, visit instructions, and follow-ups maintain continuity of care.',
    },
  ];

  // Configurable clinic types data
  readonly clinicTypes: readonly ClinicType[] = [
    {
      name: 'Dental Clinics',
      specialty: 'Oral Health & Surgery',
      highlight: 'Automated checkup reminders & procedure follow-ups',
    },
    {
      name: 'General Physicians',
      specialty: 'Primary Care & Family Medicine',
      highlight: 'Symptom triage & routine appointment booking',
    },
    {
      name: 'Gynecology Clinics',
      specialty: "Women's Health & Obstetrics",
      highlight: 'Private qualification & prenatal care schedules',
    },
    {
      name: 'Ophthalmology Clinics',
      specialty: 'Eye Care & Vision Correction',
      highlight: 'Vision checkup bookings & post-op follow-up alerts',
    },
    {
      name: 'Dermatology Clinics',
      specialty: 'Skin, Hair & Aesthetics',
      highlight: 'Photo enquiry capture & treatment session scheduling',
    },
    {
      name: 'Other Healthcare Clinics',
      specialty: 'ENT, Pediatrics, Physio & Ortho',
      highlight: 'Configurable conversation flows for any outpatient practice',
    },
  ];

  constructor(
    private readonly titleService: Title,
    private readonly metaService: Meta
  ) {}

  ngOnInit(): void {
    // Basic SEO: Set page title
    this.titleService.setTitle(
      'Revertz | Turn WhatsApp Conversations Into Patient Appointments - Clinic Management'
    );

    // Basic SEO: Set meta description and Open Graph tags for server-side rendering
    this.metaService.updateTag({
      name: 'description',
      content:
        'Revertz is a WhatsApp-first, clinic-agnostic patient engagement and clinic management platform. Handle enquiries, qualify patients, book appointments, send reminders, and manage follow-ups.',
    });

    this.metaService.updateTag({
      property: 'og:title',
      content: 'Revertz - Turn WhatsApp Conversations Into Patient Appointments',
    });

    this.metaService.updateTag({
      property: 'og:description',
      content:
        'WhatsApp-first patient engagement and clinic management platform for dental, general medicine, gynecology, ophthalmology, and dermatology clinics.',
    });

    this.metaService.updateTag({
      property: 'og:type',
      content: 'website',
    });
  }
}
