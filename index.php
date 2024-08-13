<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Apricorn Solutions</title>
    <link href="output.css" rel="stylesheet">
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
</head>

<body>
    <?php include 'includes/header.php'; ?>
    <div class="container mx-auto px-4 md:px-8 lg:px-16">
        <?php include 'includes/banner.php'; ?>
        <?php include 'includes/testimonials.php'; ?>
        <?php include "includes/portfolio.php"; ?>
        <!-- Horizontal Line -->
        <hr class="border-0 h-1 bg-black mt-4 -mx-16">
        <?php include "includes/smallSection.php"; ?>
        <?php include "includes/pricing.php"; ?>
        <?php include "includes/services.php"; ?>
        <?php include "includes/faq.php"; ?>
        <?php include "includes/contact.php"; ?>
        <?php include "includes/footer.php"; ?>
    </div>

    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <script src="script.js"></script>
</body>

</html>