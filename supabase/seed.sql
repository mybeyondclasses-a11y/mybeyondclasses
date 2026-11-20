-- ============================================================================
-- MY BEYOND CLASSES — SEED DATA (Curricula, Grades 1-12, Official Settings)
-- ============================================================================

insert into public.curricula (code, name, region, description) values
  ('CBSE', 'CBSE (Central Board of Secondary Education)', 'India & UAE', 'NCERT-aligned national curriculum widely followed across India and Indian international schools in the UAE and Singapore.'),
  ('ICSE', 'ICSE (Indian Certificate of Secondary Education)', 'India', 'Comprehensive analytical curriculum for Grades 1-10 with strong emphasis on English, Mathematics, and Sciences.'),
  ('ISC', 'ISC (Indian School Certificate)', 'India', 'Senior secondary Grade 11-12 board curriculum across Science, Commerce, and Humanities streams.'),
  ('IB', 'IB (International Baccalaureate)', 'Global (UAE, USA, UK, Singapore, China, India)', 'Inquiry-based PYP, MYP, and Diploma Programme (DP) fostering critical thinking and international-mindedness.'),
  ('IGCSE', 'Cambridge IGCSE', 'Global (UK, UAE, Singapore, India, China)', 'Internationally recognized Grade 9-10 qualification building rigorous conceptual mastery.'),
  ('CAMBRIDGE', 'Cambridge International (Primary & Lower Secondary)', 'Global', 'Structured Cambridge Pathway for Grades 1-8 leading seamlessly into IGCSE and A-Levels.'),
  ('BRITISH', 'British National Curriculum (Key Stages 1-5)', 'UK & International', 'Key Stages 1 to 4, GCSE, and A-Level academic progression.'),
  ('AMERICAN', 'American Common Core & AP', 'USA & International', 'Common Core State Standards (Grades 1-12), Honors tracks, and Advanced Placement (AP) preparation.')
on conflict (code) do nothing;

insert into public.grades (grade_number, slug, title, stage, overview) values
  (1, 'grade-1', 'Grade 1', 'Primary', 'Foundational numeracy, phonics, early reading, environmental awareness, and playful inquiry.'),
  (2, 'grade-2', 'Grade 2', 'Primary', 'Core arithmetic fluency, sentence building, everyday science, and structured curiosity.'),
  (3, 'grade-3', 'Grade 3', 'Primary', 'Multiplication, division, fractions introduction, living systems, grammar, and digital literacy.'),
  (4, 'grade-4', 'Grade 4', 'Primary', 'Multi-digit operations, geometry basics, ecosystems, social studies, and logical reasoning.'),
  (5, 'grade-5', 'Grade 5', 'Primary', 'Decimals, percentages, matter & energy, comprehension mastery, and bridge to middle school.'),
  (6, 'grade-6', 'Grade 6', 'Middle', 'Pre-algebra, ratios, introductory physics/chemistry/biology, world history, and coding foundations.'),
  (7, 'grade-7', 'Grade 7', 'Middle', 'Linear equations, integers, light & heat, cellular biology, civics, and Python fundamentals.'),
  (8, 'grade-8', 'Grade 8', 'Middle', 'Algebraic identities, mensuration, force & pressure, chemical reactions, and Olympiad readiness.'),
  (9, 'grade-9', 'Grade 9', 'Secondary', 'Polynomials, coordinate geometry, laws of motion, atomic structure, and board exam foundations.'),
  (10, 'grade-10', 'Grade 10', 'Secondary', 'Trigonometry, quadratic equations, electricity, chemical equations, genetics, and Board/IGCSE mastery.'),
  (11, 'grade-11', 'Grade 11', 'Senior Secondary', 'Calculus foundations, mechanics, thermodynamics, organic chemistry, economics, accountancy, and CS.'),
  (12, 'grade-12', 'Grade 12', 'Senior Secondary', 'Advanced calculus, electromagnetism, organic synthesis, board exam excellence, and university readiness.')
on conflict (grade_number) do nothing;

insert into public.platform_settings (key, value) values
  ('company_info', '{"name":"MY BEYOND CLASSES","tagline":"Learn Beyond Limits. Achieve Beyond Expectations.","email":"mybeyondclasses@gmail.com","markets":["India","UAE","USA","UK","China","Singapore"]}'::jsonb),
  ('social_links', '{"instagram":"https://www.instagram.com/mybeyondclasses/","facebook":"https://www.facebook.com/people/My-Beyond-Classes/61596552158175/","youtube":"https://www.youtube.com/@MybeyondClasses","linkedin":"https://www.linkedin.com/company/my-beyond-classes/","whatsapp":"https://chat.whatsapp.com/CHcJgW1C1IDBSIXGPZInIN"}'::jsonb)
on conflict (key) do nothing;
