def get_course_recommendations(user_interests, courses):
    """
    Simple recommendation system based on matching tags
    """
    recommendations = []
    
    for course in courses:
        score = sum(1 for tag in course['tags'] if tag.lower() in [i.lower() for i in user_interests])
        if score > 0:
            recommendations.append({
                'course': course,
                'score': score
            })
    
    # Sort by score descending
    recommendations.sort(key=lambda x: x['score'], reverse=True)
    
    # Return top 3 recommendations
    return [r['course'] for r in recommendations[:3]]