puts "Seeding users..."

10.times do
    boolean_value = [true, false]

    User.create(
        name: Faker::Name.name,
        email: Faker::Internet.free_email,
        password: "@abc123ABC",
        phone_number: 123456789,
        avatar_url: Faker::Avatar.image,
        is_admin: boolean_value.sample
    )
end


10.times do
    Category.create(
        genre: Faker::Book.genre,
        sub_genre: Faker::Book.genre,
        description: Faker::Lorem.paragraph_by_chars(number: 100, supplemental: true),
        age_category: %w[YoungAdult Children Adult].sample
    )
end



100.times do
    date = Faker::Date.between(from: '1950-01-01', to: '2023-03-29')
    year = date.year

    Book.create(
        title: Faker::Book.title,
        author: Faker::Book.author,
        description: Faker::Lorem.paragraph_by_chars(number: 100),
        publisher: Faker::Book.publisher,
        year_of_publication: "12-12-2015",
        price: 10.12,
        image_url: Faker::LoremFlickr.image,
        isbn: "123456789012345678",
        category_id: rand(1..10)
    )
end

puts "Done seeding!"
