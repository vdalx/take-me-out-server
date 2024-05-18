const knex = require("knex")(require("../knexfile"));
const { v4: uuidv4 } = require('uuid');

exports.getContent = (_req, res) => {
    knex('content')
        .select(
            'content.id',
            'content.post_name',
            'content.post_author',
            'content.post_date',
            'content.post_location',
            'content.post_likes',
            'content.post_desc',
            'content.post_body',
            'content.post_image',
            'content.post_image_attribution',
            'content.post_image_attribution_link',
            'content_lists.content_id',
            'content_lists.event_id',
            'events.event_name',
            'events.event_date',
            'events.ticket_price',
            'events.event_desc',
            'events.event_image',
            'events.event_image_attribution',
            'events.event_image_attribution_link',
            'events.venue_id',
            'venues.venue_name',
            'venues.venue_address',
            'venues.venue_city',
        )
        .join('content_lists', 'content.id', 'content_lists.content_id')
        .join('events','content_lists.event_id', 'events.id')
        .join('venues', 'events.venue_id', 'venues.id')
        .then((data) => {
            const originalPostArr = data;

            const postArr = originalPostArr.map(post => ({
                post_id: post.id,
                post_name: post.post_name,
                post_author: post.post_author,
                post_date: post.post_date,
                post_location: post.post_location,
                post_likes: post.post_likes,
                post_desc: post.post_desc,
                post_body: post.post_body,
                post_image: post.post_image,
                post_image_attribution: post.post_image_attribution,
                post_image_attribution_link: post.post_image_attribution_link,
                post_events: []
                })
            );

            const ids = postArr.map(({ post_id }) => post_id);
            const uniquePostArr = postArr.filter(({ post_id }, index) =>!ids.includes(post_id, index + 1));

            originalPostArr.forEach((i) => {
                uniquePostArr.forEach((x) => {
                    if ( i.id === x.post_id) {
                        const eventObj = 
                        {
                            event_id: i.event_id,
                            event_name: i.event_name,
                            event_date: i.event_date,
                            event_price: i.ticket_price,
                            event_desc: i.event_desc,
                            event_image: i.event_image,
                            event_image_attribution: i.event_image_attribution,
                            event_image_attribution_link: i.event_image_attribution_link,
                            venue_name: i.venue_name,
                            venue_address: i.address,
                            venue_city: i.city,
                        }
                        x.post_events.push(eventObj);
                    }
                })
            });

            res.status(200).json(uniquePostArr);
        })
        .catch((err) =>
            res.status(400).send(`Error retrieving events`)
    );
};

exports.addContent = (req, res) => {

};

exports.getContentById = (req, res) => {
    knex('content')
        .where({ id: req.params.id })
        .then((data) => {
            if(!data.length) {
                return res.status(404).send(`Record with id: ${req.params.id} is not found`);
            }
            res.status(200).json(data[0]);
        })
        .catch((err) =>
            res.status(400).send(`Error retrieveing content with id ${req.params.id}`)
        );
};

exports.updateContentById = (req, res) => {

};

exports.deleteContentById = (req, res) => {
    knex('content')
        .delete()
        .where({ id: req.params.id })
        .then(() => {
            res.status(204).send(`Content with id: ${req.params.id} has been deleted`);
        })
        .catch((err) =>
            res.status(400).send(`Error deleting content with id: ${req.params.id}`)
        );
};