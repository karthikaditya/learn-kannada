
<template>
    <div class="body-padding">
        <!-- <h2>About the application</h2> -->

        <div style="display: block; width: 60%; margin-left: auto; margin-right: auto;" >
            <a class="twitter-timeline" href="https://twitter.com/MythicSociety?ref_src=twsrc%5Etfw">Tweets by
                MythicSociety</a>
        </div>
    </div>
</template>

<script>

export default {
    mounted() {
        let twitterScript = document.createElement('script')
        twitterScript.setAttribute('src', 'https://platform.twitter.com/widgets.js')
        twitterScript.setAttribute('charset', 'utf-8')
        twitterScript.async = true;

        document.head.appendChild(twitterScript)
    },
}
</script>