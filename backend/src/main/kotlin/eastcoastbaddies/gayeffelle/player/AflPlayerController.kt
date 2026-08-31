package eastcoastbaddies.gayeffelle.player

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/players")
class AflPlayerController(private val repo: AflPlayerRepository) {

    @GetMapping
    fun getAll(): List<AflPlayer> = repo.findAll()
}
