package eastcoastbaddies.gayeffelle

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api")
class BaseController {

    @GetMapping("/ping")
    fun ping(): String = "pong"

}
