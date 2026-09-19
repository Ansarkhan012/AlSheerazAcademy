begin;

insert into public.categories (name, slug, description)
values ('Quran Learning', 'quran-learning', 'Guidance for learning, understanding, and reciting the Quran.')
on conflict (slug) do nothing;

insert into public.tags (name, slug) values
  ('Tajweed', 'tajweed'),
  ('Quran Recitation', 'quran-recitation'),
  ('Online Quran Classes', 'online-quran-classes')
on conflict (slug) do nothing;

do $$
declare
  cms_author uuid;
  tajweed_post uuid;
begin
  select author_id into cms_author
  from public.posts
  where status = 'published'
  order by published_at desc nulls last
  limit 1;

  if cms_author is null then
    raise exception 'A published CMS post is required before migrating the Tajweed article';
  end if;

  insert into public.posts (
    title, slug, excerpt, content, author_id, category_id, status,
    seo_title, seo_description, published_at
  ) values (
    'The Importance of Tajweed in Quran Recitation',
    'tajweed',
    'Learn why proper Tajweed is essential for beautiful and correct Quran recitation, how it preserves meaning, and how to begin learning.',
    '{"type":"doc","content":[
      {"type":"blockquote","content":[{"type":"paragraph","content":[{"type":"text","text":"And recite the Quran with measured recitation. — Quran 73:4"}]}]},
      {"type":"heading","attrs":{"level":2},"content":[{"type":"text","text":"Key Takeaway"}]},
      {"type":"paragraph","content":[{"type":"text","text":"Reciting the Holy Quran is not just about reading words. It is about reciting Allah’s words correctly, beautifully, and respectfully. Tajweed protects the meaning of the Quran and helps strengthen the reciter’s spiritual connection with Allah."}]},
      {"type":"heading","attrs":{"level":2},"content":[{"type":"text","text":"Why Is Tajweed Important?"}]},
      {"type":"paragraph","content":[{"type":"text","text":"The Quran is the word of Allah, revealed in Arabic. Because Arabic is precise, even a small pronunciation error can alter the meaning of a verse. Understanding the importance of Tajweed is therefore essential for every Muslim."}]},
      {"type":"paragraph","content":[{"type":"text","text":"Tajweed ensures that every letter is pronounced from its correct articulation point (Makharij) and with its proper characteristics (Sifaat). Without these rules, a person may unknowingly make serious mistakes while reciting."}]},
      {"type":"heading","attrs":{"level":2},"content":[{"type":"text","text":"What Is Tajweed?"}]},
      {"type":"paragraph","content":[{"type":"text","text":"Tajweed (تجويد) means to improve or make better. In Quranic study it refers to the rules governing the correct pronunciation of letters and words."}]},
      {"type":"paragraph","content":[{"type":"text","text":"It includes learning how long to stretch sounds (Madd), when to merge letters (Idgham), when to conceal sounds (Ikhfa), and how to pronounce every letter from its proper articulation point."}]},
      {"type":"heading","attrs":{"level":2},"content":[{"type":"text","text":"Benefits of Reciting with Tajweed"}]},
      {"type":"bulletList","content":[
        {"type":"listItem","content":[{"type":"paragraph","content":[{"type":"text","marks":[{"type":"bold"}],"text":"Preserves the meaning: "},{"type":"text","text":"Correct pronunciation protects the original message of the Quran."}]}]},
        {"type":"listItem","content":[{"type":"paragraph","content":[{"type":"text","marks":[{"type":"bold"}],"text":"Follows the Prophetic example: "},{"type":"text","text":"The Prophet Muhammad ﷺ recited the Quran carefully and correctly."}]}]},
        {"type":"listItem","content":[{"type":"paragraph","content":[{"type":"text","marks":[{"type":"bold"}],"text":"Avoids recitation mistakes: "},{"type":"text","text":"Tajweed helps prevent both clear and subtle errors."}]}]},
        {"type":"listItem","content":[{"type":"paragraph","content":[{"type":"text","marks":[{"type":"bold"}],"text":"Strengthens spiritual connection: "},{"type":"text","text":"Measured, beautiful recitation encourages focus, humility, and reflection."}]}]}
      ]},
      {"type":"heading","attrs":{"level":2},"content":[{"type":"text","text":"Learn Tajweed Online with Al Sheeraz Islamic School"}]},
      {"type":"paragraph","content":[{"type":"text","text":"Al Sheeraz Islamic School offers structured online Quran classes with Tajweed for children, adults, beginners, and advanced learners. Experienced teachers guide students step by step toward clear and confident recitation."}]},
      {"type":"bulletList","content":[
        {"type":"listItem","content":[{"type":"paragraph","content":[{"type":"text","text":"One-to-one online Quran classes"}]}]},
        {"type":"listItem","content":[{"type":"paragraph","content":[{"type":"text","text":"Qualified male and female teachers"}]}]},
        {"type":"listItem","content":[{"type":"paragraph","content":[{"type":"text","text":"Flexible class timings and affordable monthly fees"}]}]},
        {"type":"listItem","content":[{"type":"paragraph","content":[{"type":"text","text":"A safe online learning environment for children"}]}]}
      ]},
      {"type":"heading","attrs":{"level":2},"content":[{"type":"text","text":"Start Learning Quran with Tajweed"}]},
      {"type":"paragraph","content":[{"type":"text","text":"Learning Tajweed is an act of worship. With patient instruction and regular practice, students can improve their recitation and deepen their connection with the Quran."}]}
    ]}'::jsonb,
    cms_author,
    (select id from public.categories where slug = 'quran-learning'),
    'published',
    'The Importance of Tajweed in Quran Recitation – Learn Tajweed Online',
    'Learn the importance of Tajweed in Quran recitation, why correct pronunciation matters, and how online Tajweed classes can help children and adults.',
    '2025-09-15T00:00:00Z'
  )
  on conflict (slug) do update set
    title = excluded.title,
    excerpt = excluded.excerpt,
    content = excluded.content,
    category_id = excluded.category_id,
    seo_title = excluded.seo_title,
    seo_description = excluded.seo_description
  returning id into tajweed_post;

  insert into public.post_tags (post_id, tag_id)
  select tajweed_post, id from public.tags
  where slug in ('tajweed', 'quran-recitation', 'online-quran-classes')
  on conflict do nothing;
end;
$$;

commit;
