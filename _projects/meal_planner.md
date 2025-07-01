---
title: Meal Planner
description: A web app to help plan meals. Built using Github Copilot.
icon: 
    - devicon-ruby-plain
    - devicon-rails-plain
layout: project
link_name: Github
link_url: https://github.com/Turnlings/meal-planner
order: 3
year: 2025
---
> Deployed at [https://meal-planner-fige.onrender.com](https://meal-planner-fige.onrender.com/)

This project was atypical in that I went into it intending to see how effective *vibe coding* really is. I found that it was very useful at building an MVP, I had a working product in a matter of hours, but as complexity grew it ran into more and more issues. This is where I found it very useful that I had just finished a group project in Rails: [The Rainbow Badge Manager](./rainbows.html) and was currently working on my [Grade Tracker](./grade_tracker.html) over the summer. Having the experience in the technology allowed me to better guide the AI agent, and also make manual changes when required.

## Technologies
- Ruby on Rails

## Initial Prompt

> ## Overview  
> Make a Ruby on Rails 7 app to help users store and plan meals. Each user logs in using Devise and can manage their own meals. A meal has a name, a list of ingredients, instructions, and tags.  
>   
> ## Features  
> - Use Devise for user authentication.  
> - Meals are user-specific and private.  
> - Users can perform full CRUD operations on meals.  
> - Meals have two separate sets of tags, each as their own model with many-to-many relationships:  
>   1. **MealTags** – e.g. "chicken", "vegetarian", "pasta"  
>   2. **PersonTags** – e.g. "Dad", "Mum", "Sister", representing who in the family likes the meal  
>   
> ## Tagging & Search  
> - On the meals index page:  
>   - Provide search fields with autocomplete for both MealTags and PersonTags.  
>   - Selecting a tag filters meals to only those with the selected tag.  
>   - Support filtering by multiple tags from either category.  
>   
> ## Design  
> - Mobile-first responsive layout using Tailwind CSS.  
> - Light theme with modern, clean UI.  
> - Prioritize readability and touch-friendly controls.  
>   
> ## Bonus (optional)  
> - Support uploading photos for meals.  
> - Allow marking meals as "planned", "cooked", or "favourite".
